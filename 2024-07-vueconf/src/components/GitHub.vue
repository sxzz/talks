<script setup lang="ts">
defineProps<{
  id: string
  name?: string
  label: string
}>()
</script>

<template>
  <div flex="~ col" items-center gap1>
    <a border-none="!" :href="`https://github.com/${id}`" target="_blank">
      <img
        :src="`https://github.com/${id}.png`"
        :alt="id"
        mb2
        h-24
        w-24
        rounded-full
        object-cover
      />
    </a>
    <div text-4 op70 font-smiley>{{ label }}</div>
    <a
      :href="`https://github.com/${id}`"
      target="_blank"
      font-semibold
      border-none="!"
      tracking-wider
    >
      {{ name || id }}
    </a>
  </div>
</template>
