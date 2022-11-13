---
layout: cover
title: <VueMacrosTitle inline font-mono>defineModel</VueMacrosTitle>
---

# <VueMacrosTitle inline font-mono>defineModel</VueMacrosTitle>

<p class="!opacity-80">
Simplify verbose declaration of props and emits. Thanks to <logos-vueuse /> <a href="https://vueuse.org/" target="_blank">VueUse</a>.
</p>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {all|2|7|12-13|all}
<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  count: number
}>()

const emit = defineEmits<{
  (evt: 'update:modelValue', value: string): void
  (evt: 'update:count', value: number): void
}>()

emit('update:modelValue', 'newValue')
emit('update:count', props.count + 1)
</script>
```

  </div>

  <div v-click>➡️</div>

  <div v-after flex="1">
```vue
<script setup lang="ts">
const { modelValue, count } = defineModel<{
  modelValue: string
  count: number
}>()

modelValue.value = 'newValue'
count.value++
</script>
```

  </div>
</div>

