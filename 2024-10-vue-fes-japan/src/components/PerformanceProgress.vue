<script setup lang="ts">
defineProps<{
  name: string
  secondary?: string
  icon: string
  progress: number
  highlight?: boolean
}>()
</script>

<template>
  <div flex items-center gap4 rounded-md p3 :class="[highlight && 'bg-sky/20']">
    <div w-30 flex items-center gap1>
      <div :class="icon" w-4 op80 />
      <span text-sm>{{ name }}</span>
      <span v-if="secondary" text-xs op70>({{ secondary }})</span>
    </div>
    <div flex flex-1 items-center gap2>
      <div
        :style="{ width: `${progress}%` }"
        h="2.25"
        rounded
        bg-gradient-from-green-700
        bg-gradient-to-green-300
        bg-gradient-to-rt
        op90
      />
      <span text-xs op80>{{ progress }}%</span>
    </div>
  </div>
</template>
