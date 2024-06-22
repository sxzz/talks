---
layout: cover
---

# 未来的 <VueMacrosTitle inline font-mono>defineMacro</VueMacrosTitle>

[issue #6392](https://github.com/vuejs/core/issues/6392)

- 不再局限于 Vue Macros 提供的宏；
- 可以使用社区发布的宏；
- 通过 `@vue-macros/api` 提供核心能力；
- 更灵活地定义组件的属性 (props, emits...)


<div v-click mt2>

<h3 mb2>
`unplugin-vue-router` 的 <VueMacrosTitle inline font-mono> definePage</VueMacrosTitle>
</h3>

```vue
<script setup>
definePage({
  name: 'my-own-name',
  path: '/absolute-with-:param',
  alias: ['/a/:param'],
})
</script>
```

</div>


<!-- 
- 未来也有在计划实现 `defineMacro`

- 有了这个能力，允许开发者开发自己的宏，并发布到 npm 之类的地方。用户就可以引用来自社区的宏。
- 然后由 Vue Macros 通过刚才讲到的 `api` 这个包，提供核心的能力
- 其实也是来自于 GitHub 仓库一个 issue 的提议
- *click* 举个例子，其实 Vue router 有一个插件叫做 `unplugin-vue-router`，也是 Vue router 的作者写的。
- 这个包其实就使用 Vue Macros 的部分代码，实现 `definePage`，可以在 Vue SFC 中来定义路由
- `defineMacro` 的首先目标就是做到让现有的 `defineModel` 和 这个 `definePage` 只依赖公开的 api 这个包来实现现有的功能。尽可能避免直接复制来自 Vue Macros 的代码。
-->
