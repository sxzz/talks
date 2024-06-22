---
layout: cover
---

<style>
ul li {
  
}
</style>

<h1 flex justify-between>
<VueMacrosTitle inline font-bold>什么是 Vue Macros?</VueMacrosTitle>
<div>
<a text-5 class="!border-none" href="https://github.com/sxzz/unplugin-vue-macros" target="_blank"><ri-github-fill/></a>
</div>
</h1>

<span text-lg>
Vue Macros 实现了一系列还没有被 Vue 官方实现的提案 RFC 或来自社区主意。
</span>

<div>

<v-clicks>

- ✨ 为 Vue 扩展更多的宏和语法糖；

- 💚 开箱即用地支持 Vue 2.7 和 Vue 3；

- 🦾 类型安全
  - 支持 <logos-typescript-icon /> TypeScript 和 <logos-vue/> Volar 插件；

- ⚡️ 支持多种打包器
  - 同时支持 <logos-vitejs/> Vite 3/4, <logos-webpack/> Webpack, <logos-vue/> Vue CLI, <logos-rollupjs/> Rollup 2/3, <logos-esbuild/> esbuild 等。使用 <img src="https://avatars.githubusercontent.com/u/80154025?s=200" inline w-16px /> [unplugin](https://github.com/unjs/unplugin) 驱动。

</v-clicks>

</div>

<!--
- 在 Vue 官方的这些宏的基础上，Vue Macros 扩充了一系列的其他比较实用的宏，和特性。有点像我们社区的 VueUse 也提供了一系列的 Composition API 的功能。只不过 VueUse 是运行时的，而 Vue Macros 是纯编译时的东西。
- *click*
- 这个插件会吸收一些社区的想法和未落地的 RFC，它会在编译的时候将这些 Vue 编译器不认识的东西，转换成 Vue 中合法的代码。
- 用一个不是很恰当的比喻，这就有点像 Babel，在 Vue SFC 中的 Babel。对应 Babel 就是实现 TC39 中 stage 1 和 2 的提案。
- 当然部分比较激进的 feature 也是不建议在生产环境使用的。更多的是当成一个先行试用和探索的库来使用。
- *click*
- 它也是支持同时 Vue 2.7 和 Vue 3 的。
- *click*
- 大多数的功能也是支持 TypeScript，也提供了 Volar 的插件。基本上来说和 vue core 自带功能的开发体验差不多了。
- *click*
- 因为 Vue Macros 是编译时的工具，所以需要和打包器一起使用。它支持了绝大多数的打包器，像 Vite, webpack, Rollup, esbuild 等等
- 也支持 HMR 热重载。
- 昨天 Vite 4 刚刚发布，所以也将在近期放弃对 Rollup 2 和 Vite 3 的支持。
-->
