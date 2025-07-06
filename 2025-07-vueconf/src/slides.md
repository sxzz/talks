---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: tsdown：库库包一切
mdc: true
layout: cover
growOpacity: 0.6
---

# tsdown：库库包一切

## 💅 优雅的库打包工具

<img abs-tr mt20 mr46 src="https://tsdown.dev/tsdown.svg" w-50 op80 />

<div abs-br mr-10 mb-10 flex scale-120 opacity-70>
  <div flex flex-col items-center justify-center gap1>
    <img src="/vue-badge.png" w20 />
    <div text-sm>2025-07-12</div>
  </div>
</div>

<!--
大家好，很高兴又一次在 VueConf 和大家见面。

今天我想给大家介绍一个全新的库打包工具——tsdown。

tsdown 的定位是“优雅的库打包工具”，它的目标是帮助前端和后端开发者更高效、更轻松地构建和发布自己的 TypeScript 库。

接下来，我会和大家一起聊聊 tsdown 的设计理念、核心功能，以及它是如何让我们的库开发变得更加简单和优雅的。
-->

---
layout: intro
growSeed: 15
growOpacity: 0.6
class: p-20
---

<h1 font-smiley>三咲智子 <sup opacity-80 font-hand text-5xl>Kevin Deng</sup></h1>

<div class="[&>*]:important-leading-10 opacity-90">

作者 {tsdown} / {Vue Macros} / {Elk}<br>
团队成员 {Vue} / {VueUse} / {Rolldown} / {Oxc}<br>
维护者 {Unplugin} / {Quansync}<br>
受 {VoidZero} 赞助<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center op85>
  <div i-ri-github-fill op50 ma text-xl />
  <div><a href="https://github.com/sxzz" target="_blank" border-none="!">sxzz</a></div>

  <div i-ri:bluesky-fill op80 ma text-xl ml4 text="#1083fe" />
  <div><a href="https://bsky.app/profile/sxzz.dev" border-none="!" target="_blank">sxzz.dev</a></div>

  <div i-ri-twitter-fill op80 ma text-xl ml4 text="#1DA1F2" />
  <div><a href="https://twitter.com/sanxiaozhizi" border-none="!" target="_blank">sanxiaozhizi</a></div>

  <div i-ri-bilibili-fill op80 ma text-xl ml4 text="#20B0E3" />
  <div><a href="https://space.bilibili.com/24679024" target="_blank" border-none="!" text-nowrap>三咲智子</a></div>
</div>

<img src="https://raw.githubusercontent.com/sxzz/static/main/avatar.png" rounded-full w-55 abs-tr mt-32 mr-30 />

<!--
按照惯例，先简单做个自我介绍！我是 tsdown、Vue Macros 和 Elk 的作者，同时也是 Vue、VueUse、Rolldown、Oxc 等团队的成员，还在维护 Unplugin、Quansync 等项目。

我是一名 VoidZero 赞助的独立开发者。如果你对我感兴趣，欢迎在 GitHub、Twitter，或者哔哩哔哩上关注我。

目前我主要在维护前端工具链相关的项目，也会在 GitHub 上做一些自己感兴趣的内容。
-->

---
layout: fact
---

# 🤔 库打包工具？

<!--
那什么是库打包工具呢？
-->

---
layout: statement
class: text-center
---

# 🔎 打包的本质

<div flex="~ row items-center justify-center gap-8" mt-20>
  <div flex="~ col items-center gap-2">
    <div flex gap5 text-5xl mb2>
      <div i-logos-typescript-icon />
      <div i-logos-vue />
      <div i-logos-react />
    </div>
    <div text-lg font-bold mt2>各种各样的源码</div>
    <div text-sm op70>TS / Vue SFC / JSX / CSS...</div>
  </div>
  <div i-carbon-arrow-right text-5xl text-gray-400 mx-8 />
  <div flex="~ col items-center gap-2">
    <div i-carbon-package text-5xl text-blue mb2 />
    <div text-lg font-bold mt2>可直接引用的库产物</div>
    <div text-sm op70>ESM / CJS / .d.ts / 压缩 / Tree Shaking</div>
  </div>
</div>

<div mt-10 text-2xl op90 font-bold v-click>让你的代码能被其他项目直接用</div>

<!--
打包的本质，就是把你的源码，比如 TS、Vue SFC、JSX，变成其他项目可以直接引用的库产物。它会自动处理格式、依赖、类型声明，把零散的代码整合在一起，还能做压缩和 Tree Shaking。

[click] 一句话，就是让你的代码能被其他项目直接用。
-->

---
layout: statement
class: text-center
---

# 🤨

# 为什么又一个库打包工具？

<div mt10 flex flex-col gap6>
  <div v-click text-xl op90>🤦 Rollup、esbuild、tsup、unbuild……</div>
  <div v-click font-bold text-2xl>为什么还需要 tsdown？</div>
</div>

<!--
- 大家可能会问，市面上已经有很多打包工具了，
- [click] 比如 Rollup、esbuild、tsup、unbuild 等等。
- [click] 那为什么还要再造一个 tsdown 呢？
-->

---
layout: statement
class: text-center
---

# 🤕 库打包的痛点

<div grid cols-2 gap10 mt-12 mx30>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon:document-configuration text-4xl text-yellow-400 />
    <div text-lg>配置繁琐</div>
    <div text-sm op70>Rollup / esbuild 配置复杂，容易踩坑</div>
  </div>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon-idea text-4xl text-blue-400 />
    <div text-lg>类型声明难搞</div>
    <div text-sm op70>tsc 配合麻烦，手写构建脚本</div>
  </div>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon-cube text-4xl text-green-400 />
    <div text-lg>多格式易出错</div>
    <div text-sm op70>ESM / CJS / IIFE 配置不统一</div>
  </div>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon-rocket text-4xl text-purple-400 />
    <div text-lg>性能瓶颈</div>
    <div text-sm op70>大型库构建慢</div>
  </div>
</div>

<!--
其实库打包一直有很多痛点。

[click] 比如配置繁琐：像 Rollup 这种以插件为核心的工具，你可能需要配置很多插件，才能实现一个完整的打包流程。不同插件之间还可能会有冲突。esbuild 和 tsup 虽然用起来简单，但功能不够全面，比如没有像 Rollup 那样强大的插件生态。

[click] 类型声明难搞：我们有 tsc，但 tsc 只是逐文件地把 TS 转成 JS 和 DTS。如果你需要多格式输出，比如 CJS 和 ESM，就得自己写脚本来生成合适的类型声明。如果还想把 DTS 一起打包，那就更需要其他工具配合了。

[click] 多格式输出麻烦：如果你用 esbuild 或 Rollup，同时想要输出多种格式（比如 ESM、CJS、IIFE），那可能要写三套配置，或者抽公共配置，也挺折腾的。

[click] 性能瓶颈：大项目构建慢。Rollup 是用 JavaScript 写的，性能上天生比不过 esbuild 或 Rolldown 这种用 Go、Rust 写的工具。

这些问题在实际开发中经常遇到，尤其是经常做库开发的开发者应该深有体会。tsdown 就是为了解决这些痛点而诞生的。
-->

---
class: m20
---

# tsdown 的定位 📍

专为现代库开发而生

<div mt-10 text-lg op80>

- 极简配置，开箱即用

- 自动类型声明，依赖分析

- 多格式输出，一致体验

- 极致性能，🦀 Rust 驱动

- 拥抱现代前端开发范式

</div>

<!--
tsdown 的定位非常明确，就是专为现代库开发而生。

- 它追求极简配置，开箱即用。
- 自动帮你处理类型声明，还能智能分析依赖，知道哪些需要打包，哪些可以直接 import。
- 多格式输出，体验一致，不用为了不同格式写多套配置。
- 性能也非常强悍，底层用的是 Rust 写的 Rolldown 引擎。
- 同时，tsdown 也积极拥抱现代前端开发范式。前端生态变化很快，两年前的最佳实践，今天可能就已经过时了。
-->

---
layout: center
class: text-center
---

# 💁 tsdown 能做什么？

<div grid="~ cols-3 gap8" mt-16>
  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-logos:nodejs-icon-alt text-5xl />
    <div>Node.js / CommonJS
      <div op70 text-sm mt1><code>require('fs')</code></div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-logos:vue text-5xl />
    <div>Vue 组件
      <div op70 text-sm mt1><code>App.vue</code></div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-vscode-icons:file-type-typescriptdef rounded text-5xl />
    <div>TypeScript 类型声明
      <div op70 text-sm mt1><code>lib.d.ts</code></div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-icon-park-outline:compression text-5xl />
    <div>压缩
      <div op70 text-sm mt1>Minification / Tree-shaking</div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-carbon:cube text-5xl />
    <div>打包
      <div op70 text-sm mt1>bundle / bundleless</div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <img src="https://unplugin.unjs.io/logo_dark.svg" w-12  />
    <div>插件
      <div op70 text-sm mt1>unplugin / Rollup / Vite</div>
    </div>
  </div>
</div>

<div mt-8 op80 text-2xl v-click>😎 还有更多，写不下了</div>

<!--
那 tsdown 具体能做什么呢？

- [click] 它支持 Node.js 和 CommonJS 模块，不仅能处理 `require('fs')` 这样的代码，也能输出 CJS 格式。比如说你有 CJS 模块，tsdown 会帮你转换成 ESM 格式给浏览器运行。
- [click] Node.js 和浏览器都不认识 .vue 文件，tsdown 可以帮你打包 Vue 组件，不仅能把 Vue SFC 单文件组件编译成 JS，还能同时输出类型声明。
- [click] 能把 TypeScript 的类型声明打包成一个 `.d.ts` 文件，方便分发和使用。
- [click] 支持代码压缩，包括 Minification 和 Tree-shaking，特别适合对体积有要求、需要在浏览器中用的库。
- [click] 当然，打包器肯定可以打包。如果你的库要在浏览器里用，肯定不希望浏览器去加载一堆 JS 文件。但对于 Node.js，有些人可能觉得没必要打包，所以我们也支持 bundleless 模式，也就是可以选择不打包。
- [click] 更重要的是，tsdown 支持各种插件，可以和 unplugin、Rollup、Vite 的插件无缝集成，直接享受这三个生态的插件能力。

[click] 还有更多功能，这里就不一一展开了，欢迎大家去看文档。今天我会挑选一些核心功能来给大家介绍。
-->

---
layout: center
class: text-center
---

# 🏄 快速上手

<div grid="~ cols-3 gap-8" mt-10>
  <div flex="~ col items-center">
    <div text-lg font-bold mb-2>新建项目</div>

```bash
pnpm create tsdown@latest
```

  </div>
  <div flex="~ col items-center">
    <div text-lg font-bold mb-2>手动安装</div>

```bash
pnpm i -D tsdown
```

  </div>

  <div flex="~ col items-center">
    <div text-lg font-bold mb-2>一行命令打包</div>

```bash
tsdown
```

  </div>
</div>

<v-clicks mt-8 text-lg text-left op80>

- 支持 npm / pnpm / Yarn / Bun，Yarn PNP 正在路上

- Node.js 20.19+，Deno / Bun 实验性支持
- 支持 CLI 和配置文件混用 `tsdown --no-dts`
- 常用参数一应俱全，如 `--format`、`--watch`

</v-clicks>

<!--
上手 tsdown 非常简单。你可以用一行命令新建一个新项目，也可以手动安装到现有项目里。打包也只需要一行命令就搞定。

- [click] 支持 npm、pnpm、Yarn 和 Bun，Yarn PNP 也在路上。
- [click] 支持 Node.js 20.19 及以上，Deno 和 Bun 的支持还在实验阶段。
- [click] 支持 CLI 和配置文件混用，比如你可以用 `tsdown --no-dts` 来覆盖配置文件里的 `dts` 选项。
- [click] 常用参数都很齐全，比如 `--format`、`--watch` 等等。
我们还预设了很多默认配置，基本能满足大部分需求。
-->

---
class: m20
---

<h1 flex gap2 items-start>
  类型声明生成
  <div i-vscode-icons:file-type-typescriptdef mt="-1.5" />
</h1>

<div flex items-center gap1 op80 text-sm>
  <div i-devicon:npm />
  <a font-mono href="https://www.npmjs.com/package/rolldown-plugin-dts" target="_blank">
    rolldown-plugin-dts
  </a>
</div>

<div mt10 text-lg>
<v-clicks>

- 无需 tsc，无需手动配置
- 性能优先
  - 支持 `isolatedDeclarations`，由 {Oxc} 驱动
  - 支持 TypeScript Go <span op60 ml2>(tsgo.sxzz.dev)</span>
  - 支持多项目多线程生成
- 支持 {Vue} 组件

</v-clicks>
</div>

<!--
类型声明也是库开发中常见的痛点之一。

[click] tsdown 内置了自动生成 .d.ts 的能力，不需要 tsc，也不需要手动配置，开箱即用。而且性能优先，生成速度非常快。

[click] 它支持 tsconfig 的 `isolatedDeclarations` 模式，底层由 Oxc 驱动，还支持 TypeScript Go、多项目多线程生成

[click] 以及 Vue 组件的类型声明输出。
-->

---
layout: center
---

<h1 text-center>依赖分析与处理</h1>

<div grid="~ cols-2 gap-8" mt-14>
<div flex="~ col items-center gap-2" v-click bg-active rounded-xl p4>
  <div i-carbon-package text-3xl text-blue-400 />
  <div>自动导入或打包依赖</div>
  <div text-sm op70><code>dependencies</code>/<code>peerDependencies</code> 默认外部化</div>
</div>
<div flex="~ col items-center gap-2" v-click bg-active rounded-xl p4>
  <div i-carbon-settings text-3xl text-green-400 />
  <div>灵活控制</div>
  <div text-sm op70><code>external</code> / <code>noExternal</code> 精细配置</div>
</div>
</div>

<!--
tsdown 在依赖处理上也做了很多优化：

- [click] 自动导入或打包依赖。像 `dependencies` 和 `peerDependencies` 默认都会被外部化，不会被打进包里。因为他们会被使用者的项目安装，所以不需要重复打包。
- [click] 你也可以灵活控制，支持 `external` 和 `noExternal` 这样的精细配置，想打包什么、外部化什么都可以自定义。
- 至于 devDependencies 只会打包实际用到的部分，不会把没用到的依赖带进来。
- 以及类型依赖也可以被打包，所以类型声明不会缺失。

NOTE: CDN 版本
-->

---
layout: center
---

# 多格式输出 & 平台支持

<div grid="~ cols-4 gap-8" mt-8 mb8 v-click>
  <div flex="~ col items-center gap-2">
    <div i-carbon-cube text-3xl text-purple-400 />
    <div>ESM</div>
  </div>
  <div flex="~ col items-center gap-2">
    <div i-carbon-cube text-3xl text-yellow-400 />
    <div>CJS</div>
  </div>
  <div flex="~ col items-center gap-2">
    <div i-carbon-cube text-3xl text-pink-400 />
    <div>IIFE</div>
  </div>
  <div flex="~ col items-center gap-2">
    <div i-carbon-cube text-3xl text-orange-400 />
    <div>UMD</div>
  </div>
</div>

<v-clicks>

- 一行命令多格式输出

  ```bash
  tsdown --format esm,cjs
  ```

- 支持 `node / browser / neutral` 平台

</v-clicks>

<!--
- [click] 多格式输出和平台支持也是库开发的刚需。
- [click] tsdown 一行命令就能输出多种格式。
- [click] 支持 node、browser、neutral 平台，适配各种场景。
-->

---
grow: center
layout: center
---

# 自动生成 `package.json#exports`

<div w-fit my10 flex gap8 items-center>
```ts
export default defineConfig({
  exports: true,
})
```
或
```bash
tsdown --exports
```
</div>

<div v-click>

- 自动生成 <code>main/module/types/exports</code> 字段到 `package.json`

- 开发时可指向源码，发布时自动切换

- 支持自定义 exports 规则

</div>

<!--
tsdown 还能自动生成 `package.json` 里的 `exports` 等字段：

- [click] 它会自动推断并生成像 `main`、`module`、`types`、`exports` 字段，直接写到你的 package.json 里，不需要你手动配置。
- 在开发时，这些字段可以指向源码，方便直接源码依赖，因为开发阶段产物可能还没更新。发布时会自动切换到打包后的产物。
- 当然，你也可以自定义 exports 规则，满足更复杂的需求。
-->

---
layout: center
---

<h1 text-center>Vue 支持</h1>

```ts
// tsdown.config.ts
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  plugins: [Vue()],
  dts: { vue: true },
})
```

<!--
做 Vue 组件库也很简单。[click]
一行集成 unplugin-vue，自动生成 Vue 类型声明。[click]
支持 SFC、CSS 提取、类型声明，推荐 platform: 'neutral'，兼容多端。
-->

---
layout: center
class: text-center
---

# 插件生态与扩展性

<div flex="~ gap-8" mt-16>
  <div v-click flex="~ col items-center gap-2" bg-active p5 rounded-2xl w-40>
    <img src="https://rolldown.rs/rolldown-round.svg" w-20 />
    <div>Rolldown 插件</div>
  </div>
  <div v-click="1" flex="~ col items-center gap-2" bg-active p5 rounded-2xl w-40>
    <img src="https://unplugin.unjs.io/logo_dark.svg" w-20 />
    <div>Unplugin 插件</div>
  </div>
  <div v-click="1" flex="~ col items-center gap-2" bg-active p5 rounded-2xl w-40>
    <div i-logos:rollupjs text-20 />
    <div>Rollup 插件</div>
  </div>
  <div v-click flex="~ col items-center gap-2" p5 op70 rounded-2xl border="~ dashed" w-40>
    <div i-logos:vitejs text-20 />
    <div>Vite 插件</div>
  </div>
</div>

<!--
插件方面

[click] tsdown 支持 Rolldown、Unplugin 和 Rollup 的插件。[click] 同时也对 Vite 插件做了部分兼容。

[click] 插件接口是统一的，生态非常丰富。
-->

---
class: text-center
---

# 性能

快！真的很快！

<img src="/tsdown-benchmark.png" h-90 ma rounded-xl mb3 shadow />

<div flex items-center gap1 justify-center text-sm>
  <ri-github-fill />
  <a op60 href="https://gugustinette.github.io/bundler-benchmark/" font-mono>Gugustinette/bundler-benchmark
  </a>
</div>

<!--
性能方面，tsdown 可以说是目前最快的库打包工具之一。在保证功能丰富的同时，性能也非常出色。

这里有一张 tsdown 在大型库上的性能对比图，可以看到它和其他工具相比，表现非常优秀。
-->

---
layout: center
growOpacity: 0.3
grow: bottom
---

# 从 tsup 迁移超简单

<div mt12>

```bash
tsdown migrate
```

</div>

<div grid="~ cols-2 gap-8" mt-10>
<div flex="~ col items-center gap-2">
  <div i-carbon-migrate text-3xl text-blue-400 />
  <div>一行命令自动迁移</div>
</div>
<div flex="~ col items-center gap-2">
  <div i-carbon-checkmark text-3xl text-green-400 />
  <div>配置高度兼容</div>
</div>
</div>

<!--
tsdown 是 tsup 的继任者。如果你之前用 tsup，迁移到 tsdown 也超级简单。

一行命令自动迁移，配置高度兼容。我们尽量保留了 tsup 的配置选项，确保迁移过程平滑。

大部分的 tsup 配置都可以直接用在 tsdown 上，迁移后建议 review 一下配置。
-->

---
layout: center
class: text-center
---

# 功能一览

<div grid="~ cols-4 gap-x-4 gap-y-7" mt-8 text-sm>

  <div flex="~ col items-center gap-2">
    <div i-carbon-tree-view-alt text-3xl text-green-400 />
    <div>Tree-shaking</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-icon-park-outline:compression text-3xl text-blue-400 />
    <div>Minify 压缩</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-map text-3xl text-yellow-400 />
    <div>Source Map</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-play-outline text-3xl text-pink-400 />
    <div>Watch Mode</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-branch text-3xl text-purple-400 />
    <div>Unbundle 模式</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-hugeicons:universal-access-circle text-3xl text-teal-400 />
    <div>Shims 兼容变量</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-report-data text-3xl text-orange-400 />
    <div>构建报告</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-volume-mute text-3xl text-gray-400 />
    <div>Silent 静默模式</div>
  </div>

  <div flex="~ col items-center gap-2">
    <img src="https://unplugin.unjs.io/logo_dark.svg" w="7.5" />
    <div>插件系统</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-package text-3xl text-green-400 />
    <div>自动依赖分析</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-vscode-icons:file-type-typescriptdef text-3xl text-purple-400 />
    <div>自动类型声明</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-code text-3xl text-yellow-400 />
    <div>多入口/多输出</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-rocket text-3xl text-orange-400 />
    <div>Rolldown 极致性能</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-idea text-3xl text-teal-400 />
    <div>Vite/Vitest 配置复用</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-migrate text-3xl text-green-400 />
    <div>一键迁移 tsup</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-workspace text-3xl text-blue-400 />
    <div>Monorepo 支持</div>
  </div>
</div>

<!--
上面这些，其实只是 tsdown 功能的冰山一角。还有更多强大和实用的功能，等着大家自己去探索和发现。
-->

---
glowX: 100
glowY: 100
class: ml-20 mt-5
---

## tsdown 现状

###### 截止到 2025-07-10

<div flex justify-between my14>
<div grid="~ cols-[auto_1fr] gap-x-4 gap-y-2" items-center>
  <v-clicks :every="2">
    <div text-right text-4xl font-bold color="[#BD3E53]">245K</div><div text-left text-lg op80>NPM 月下载量</div>
    <div text-right text-4xl font-bold color="[#BD7C3E]">31%</div><div text-left text-lg op80>占 Rolldown 下载量</div>
    <div text-right text-4xl font-bold color="[#A9BD3E]">1.2K</div><div text-left text-lg op80>开源的下游项目</div>
    <div text-right text-4xl font-bold color="[#54BD3E]">1.9K</div><div text-left text-lg op80>GitHub Star 数</div>
    <div text-right text-4xl font-bold color="[#3EAABD]">32</div><div text-left text-lg op80>贡献者</div>
  </v-clicks>
</div>

<img src="/tsdown-downloads.svg" w-110 v-click />
</div>

<!--
截止到前两天，tsdown 的现状是这样的：

- [click] NPM 月下载量已经达到 24.5 万。这个月我们也是超过了 Rslib，成为开源社区流行的库打包工具之一。
- [click] 占 Rolldown 下载量的约三分之一
- [click] 有 1200 个开源项目依赖 tsdown
- [click] GitHub Star 数量达到 1900 多
- [click] 目前有 32 位贡献者参与

[click] 右边这张图展示了 tsdown 的下载趋势，欢迎大家来使用 tsdown！
-->

---
layout: fact
clicks: 2
---

<div flex items-center gap10 transition-300
  :class="[$clicks === 1 && 'translate-x--200', $clicks === 2 && 'translate-x--430']">
>
  <img w-180 src="/tsdown-twitter1.png"rounded-2xl />
  <img v-click src="/tsdown-twitter2.png"rounded-2xl />
  <img src="/tsdown-twitter3.png"rounded-2xl />
</div>

<!--
- Vite
-->

---
layout: fact
---

<div flex flex-col gap2 items-center justify-center scale-200>
  <Repo name="rolldown/tsdown" />
  <a v-click href="http://tsdown.dev/" target="_blank" border-none="!" flex items-center gap1 justify-center>
    <img src="https://tsdown.dev/tsdown.svg" h-6 />
    tsdown.dev
  </a>
</div>

<!--
如果你对 tsdown 感兴趣，可以在 GitHub 上查看它的代码，[click] 也可以访问 tsdown.dev，tsdown 有一个非常完整的文档。

欢迎大家来做任何形式的贡献，无论是代码、文档还是反馈意见！
-->

---
class: text-center
---

# 赞助者

<div flex items-center justify-center gap1 op70 mb2>
  <div i-ri:heart-3-fill text-pink />
  <a href="https://github.com/sponsors/sxzz" target="_blank">github.com/sponsors/sxzz</a>
</div>

<div flex items-center justify-center gap-12>
  <a href="https://github.com/sponsors/sxzz" target="_blank" border-none="!"
    transition transition-500 ease-in-out>
    <img src="https://raw.githubusercontent.com/sxzz/sponsors/main/sponsors.circles.svg" h-95 ma object-contain />
  </a>

</div>

<!--
最后，感谢所有赞助者的支持！你们的支持是我继续参与开源的动力！我目前是受开源赞助的独立开发者，如果你也想支持我的工作，可以在 GitHub 上赞助我。
-->

---
layout: intro
class: text-center
growOpacity: 0.7
growSeed: 1
---

<h1 font-smiley scale-120>感谢</h1>

<div op80 font-smiley text-5>

幻灯片可稍后在 <ri-github-fill /> [github.com/sxzz/talks](https://github.com/sxzz/talks) 浏览

</div>

<div font-smiley text-4>
  💖
  <span op70>感谢
    <a href="https://github.com/antfu" target="_blank">Anthony Fu</a>，
    幻灯片由 <div i-logos:slidev inline-block /> <a href="https://sli.dev/" target="_blank"> Slidev</a>
    强力驱动！
  </span>
</div>

<style>
a {
  border: 0 !important
}
</style>

<!--
最后，今天我的分享就到这里了。
如果大家对 tsdown 有兴趣，可以在 GitHub 上关注 tsdown。

也需要大力感谢一下 Slidev 的作者 Anthony Fu。
-->
