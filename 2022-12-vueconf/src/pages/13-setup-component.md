---
layout: cover
---

# <VueMacrosTitle inline font-mono>setupComponent</VueMacrosTitle>

<p class="!opacity-80">
在 JS/TS 文件中使用宏
</p>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1" v-click>

```ts
export const App = defineSetupComponent(() => {
  defineProps<{
    foo: string
  }>()

  defineEmits<{
    (evt: 'change'): void
  }>()

  defineOptions({
    name: 'App',
  })

  // ...
})
```

  </div>

  <div v-click flex="1">

```ts
export const App: SetupFC = () => {
  defineProps<{
    foo: string
  }>()

  defineEmits<{
    (evt: 'change'): void
  }>()

  defineOptions({
    name: 'App',
  })
}
```

  </div>
</div>

<!--
- 还有一个比较有趣的特性。在 Vue 中也可以不用 Vue SFC 和 模板。直接使用 JSX 或手写 h 函数来写组件。很多组件库也是这么干的。

- 但是 Vue 的宏只作用于 SFC 文件中，也就是只生效于 .vue 文件。对于这部分用户就无法用刚刚说的所有 feature 了。
- *click* Vue Macros 提供了一个非常实验性的功能： `defineSetupComponent` 。通过这个宏定义的组件，里面就可以使用其他的宏了。Volar 扩展也是不需要开启的。
- *click* 如果有在用 TS 的话，也可以加上 SetupFC 的类型声明，它等同于使用函数来定义。
- 当然这个 feature，只是一个概念验证。目前还缺少 Vue 2, 完全的 TypeScript 和 Nuxt 的支持。如果写娱乐项目还是可以用用的。
-->
