---
layout: cover
---

# <VueMacrosTitle inline font-mono>setupSFC</VueMacrosTitle>

<p class="!opacity-80">
在 JS/TS 文件中使用宏
</p>

<div v-click>

```tsx
// Foo.setup.tsx
defineProps<{
  foo: string
}>()

defineEmits<{
  (evt: 'change'): void
}>()

export default () => (
  <div>
    <h1>Hello World</h1>
  </div>
)
```
</div>

<!--
- 还有另一种形式，简单介绍下，称之为 setup SFC。它与 Vue 本身 SFC 类似，它也一个文件就是一个组件。

- *click* 这个的文件内容直接是 script setup 的代码，不包含 template 和 style。也可以不用 Volar 扩展，可以直接用宏 和 导出一个渲染函数。
-->
