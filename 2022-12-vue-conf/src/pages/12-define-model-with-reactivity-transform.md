---
layout: cover
---

<div h-full flex="~ col">
<h1 class="!text-10">
<VueMacrosTitle inline font-mono>defineModel</VueMacrosTitle> 与 <a text-green href="https://vuejs.org/guide/extras/reactivity-transform.html#destructuring-with" target="_blank"><VueTitle inline>Reactivity Transform</VueTitle></a>
</h1>

<p class="!opacity-80">
开启 Reactivity Transform 后，代码还可以更短一些！
不由 <logos-vueuse /> <del><a href="https://vueuse.org/" target="_blank">VueUse</a></del> 驱动。
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

```vue {2,7-8}
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

<!-- 

- 接下里就是 defineModel 加上 Reactivity Transform

- 首先我先大概介绍下 Reactivity Transform，可能有些观众不知道这个 feature。目前它还是一个实验性的功能，可能会在 Vue 3.3 稳定下来。它可以做到 用 Ref 的时候不用手写 .value，编译器会帮你加上。具体使用可以查阅 Vue 的文档。
- *click* 如果用 defineModel 的同时，把 Reactivity Transform 打开。代码还能更简单。把 defineModel 前面加一个美元符号。就可以把 .value 去掉了。这个方案是不依赖 VueUse 的。

 -->
