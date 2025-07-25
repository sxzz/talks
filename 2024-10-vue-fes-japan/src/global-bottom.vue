<script setup lang="ts">
import { useNav } from '@slidev/client'
import seedrandom from 'seedrandom'
import { computed, ref, watch } from 'vue'

/**
 * A new grow effect system powered by blured polygons
 *
 * Credits to @pi0 @Atinux @antfu
 *
 * Properties:
 * - grow: 'left' | 'right' | 'top' | 'bottom' | 'full' -  Distribution of the polygons points
 * - growOpacity: number - Opacity of the polygons (4)
 * - growHue: number - Hue shift for the polygons (default: 0)
 * - growSeed: string | false - Seed for the stable random distribution (default: 'default')
 */

const colors = ['from-[#42B883]', 'from-[#35495E]', 'from-[#5468ff]']
const { currentSlideRoute } = useNav()

export type Range = [number, number]

export type Distribution =
  | 'full'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'

const frontmatter = computed(
  () => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {},
)
const distribution = computed(
  () => (frontmatter.value.grow || 'full') as Distribution,
)
const hide = computed(() => frontmatter.value.growHide === 'true')
const opacity = computed<number>(() => +(frontmatter.value.growOpacity || 0.4))
const hue = computed<number>(() => +(frontmatter.value.growHue || 0))
const seed = computed<string>(() =>
  frontmatter.value.growSeed === 'false' || frontmatter.value.growSeed === false
    ? Date.now().toString()
    : frontmatter.value.growSeed || 'default',
)
const overflow = 0.3
const disturb = 0.3
const disturbChance = 0.3

function distributionToLimits(distribution: Distribution) {
  const min = -0.2
  const max = 1.2
  let x: Range = [min, max]
  let y: Range = [min, max]

  function intersection(a: Range, b: Range): Range {
    return [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
  }

  const limits = distribution.split('-')

  for (const limit of limits) {
    switch (limit) {
      case 'top':
        y = intersection(y, [min, 0.6])
        break
      case 'bottom':
        y = intersection(y, [0.4, max])
        break
      case 'left':
        x = intersection(x, [min, 0.6])
        break
      case 'right':
        x = intersection(x, [0.4, max])
        break
      case 'xcenter':
        x = intersection(x, [0.25, 0.75])
        break
      case 'ycenter':
        y = intersection(y, [0.25, 0.75])
        break
      case 'center':
        x = intersection(x, [0.25, 0.75])
        y = intersection(y, [0.25, 0.75])
        break
      case 'full':
        x = intersection(x, [0, 1])
        y = intersection(y, [0, 1])
        break
      default:
        break
    }
  }

  return { x, y }
}

function distance2([x1, y1]: Range, [x2, y2]: Range) {
  return (x2 - x1) ** 2 + (y2 - y1) ** 2
}

function usePloy(number = 16) {
  function getPoints(): Range[] {
    const limits = distributionToLimits(distribution.value)
    const rng = seedrandom(`${seed.value}-${currentSlideRoute.value.no}`)
    function randomBetween([a, b]: Range) {
      return rng() * (b - a) + a
    }
    function applyOverflow(random: number, overflow: number) {
      random = random * (1 + overflow * 2) - overflow
      return rng() < disturbChance ? random + (rng() - 0.5) * disturb : random
    }
    return Array.from({ length: number })
      .fill(0)
      .map(() => [
        applyOverflow(randomBetween(limits.x), overflow),
        applyOverflow(randomBetween(limits.y), overflow),
      ])
  }

  const points = ref(getPoints())
  const poly = computed(() =>
    points.value.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(', '),
  )

  function jumpPoints() {
    const newPoints = new Set(getPoints())
    points.value = points.value.map((o) => {
      let minDistance = Number.POSITIVE_INFINITY
      let closest: Range | undefined
      for (const n of newPoints) {
        const d = distance2(o, n)
        if (d < minDistance) {
          minDistance = d
          closest = n
        }
      }
      newPoints.delete(closest!)
      return closest!
    })
  }

  watch(currentSlideRoute, () => {
    jumpPoints()
  })

  return poly
}

const poly1 = usePloy(10)
const poly2 = usePloy(6)
const poly3 = usePloy(3)
</script>

<template>
  <div
    class="bg pointer-events-none transform-gpu overflow-hidden"
    :style="{
      filter: `blur(70px) hue-rotate(${hue}deg)`,
      opacity: hide ? 0 : 1,
    }"
    aria-hidden="true"
  >
    <div
      class="clip to-white/10 bg-gradient-to-r"
      :class="colors[0]"
      :style="{ 'clip-path': `polygon(${poly1})`, opacity }"
    />
    <div
      class="clip to-white/10 bg-gradient-to-l"
      :class="colors[1]"
      :style="{ 'clip-path': `polygon(${poly2})`, opacity }"
    />
    <div
      class="clip to-white/10 bg-gradient-to-t"
      :class="colors[2]"
      :style="{ 'clip-path': `polygon(${poly3})`, opacity: 0.2 }"
    />
  </div>
</template>

<style scoped>
.bg,
.clip {
  transition: all 2.5s ease;
}

.bg {
  position: absolute;
  inset: 0;
  z-index: -10;
}

.clip {
  clip-path: circle(75%);
  aspect-ratio: 16 / 9;
  position: absolute;
  inset: 0;
}

.light .clip {
  opacity: 1 !important;
}
</style>
