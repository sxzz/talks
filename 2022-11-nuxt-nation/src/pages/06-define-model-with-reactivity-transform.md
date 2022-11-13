---
layout: cover
---

<div h-full flex="~ col">
<h1 class="!text-10">
<VueMacrosTitle inline font-mono>defineModel</VueMacrosTitle> with <a text-green href="https://vuejs.org/guide/extras/reactivity-transform.html#destructuring-with" target="_blank"><VueTitle inline>Reactivity Transform</VueTitle></a>
</h1>

<p class="!opacity-80">
With Reactivity Transform, it can even be simplified further.
</p>

<div w-full flex="~ row gap-5 1" items-center>
  <div flex="1">

```vue {7-8}
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

  <div v-click>➡️</div>

  <div v-after flex="1">

```vue {7-8}
<script setup lang="ts">
let { modelValue, count } = $defineModel<{
  modelValue: string
  count: number
}>()

modelValue = 'newValue'
count++
</script>
```

  </div>
</div>
</div>

