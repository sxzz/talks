---
layout: full
---

<div flex="~ gap-3" mb1>
<h2>一些小的语法糖</h2>
<del op70>偷懒！</del>
</div>

<div flex="~ gap-4">

<div v-click flex-auto>

### <VueMacrosTitle inline font-mono>defineRender</VueMacrosTitle>

```vue
<script setup lang="tsx">
// 直接传递 JSX
defineRender(
  <div>
    <span>Hello</span>
  </div>
)

// 或者渲染函数
defineRender(() => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
})
</script>
```
</div>

<div flex="~ col auto gap-2">

<div v-click flex-auto>

<div flex justify-between>
<h3>
<VueMacrosTitle inline font-mono>shortVmodel</VueMacrosTitle>
</h3>
<a href="https://github.com/vuejs/rfcs/discussions/395" target="_blank">RFC</a>
</div>

```vue
<template>
  <input $="msg" />
  <input ::="msg" />
  <!-- => <input v-model="msg" /> -->
  <demo $msg="msg" />
  <!-- => <input v-model:msg="msg" /> -->
</template>
```
</div>


<div v-click flex-auto>

### <VueMacrosTitle inline font-mono>shortEmits</VueMacrosTitle>

```vue {2-5,7-11}
<script setup lang="ts">
const emits = defineEmits<{
  (evt: 'update:modelValue', value: string): void
  (evt: 'update', value: string): void
}>()

// `ShortEmits` 或简写为 `SE`，可以使用元组或方法定义。
const emits = defineEmits<SE<{
  'update:modelValue': [val: string]
  update(val: string): void
}>>()
</script>
```
</div>


</div>

</div>
<!-- 
- 接下来就是一些比较小的语法糖，大概讲一下

- *click* `defineRender` 可以直接在 script setup 定义渲染函数，可以直接用 JSX，而不用模板。
- *click* `shortVmodel` 可以在使用模板的时候，把 `v-model` 简化成一个符号，目前支持 `::`, `$`, `*`。可以自己配置。
  - 这个功能也是来自社区的 RFC，感兴趣的可以到 RFC 讨论。
- *click* `shortEmits` 可以简化 TS 定义 emits 的代码。原本是上面这样子的，比较长。然后用 shortEmits 的话，可以少写几个字符吧。元组或方法定义都是可以的。
 -->


