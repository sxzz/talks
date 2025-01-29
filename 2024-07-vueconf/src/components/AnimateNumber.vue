<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  value: number
  duration: number
}>()

const number = ref(0)

const start = performance.now()
const end = start + props.duration
const startValue = number.value
const endValue = props.value

const update = () => {
  const now = performance.now()
  if (now >= end) {
    number.value = endValue
    return
  }

  const progress = (now - start) / props.duration
  number.value = startValue + (endValue - startValue) * progress
  requestAnimationFrame(update)
}

update()
</script>

<template>
  <div>
    <slot v-bind="{ number, target: value }" />
  </div>
</template>
