---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Vue Vapor：重新发明
mdc: true
layout: cover
growSeed: vue
growOpacity: 0.6
---

# Vue Vapor：重新发明

<div v-click op80>

## 探索无虚拟 DOM 的 Vue

<small>Exploring Vue without Virtual DOM</small>

</div>

<div abs-br mr-10 mb-10 flex scale-120 opacity-80>
  <div flex flex-col items-center justify-center gap1>
    <img src="/vue-badge.png" w20 />
    <div text-sm>2024-06-22</div>
  </div>
</div>

<!--
哈喽大家好，很高兴这次能和大家一起在 VueConf 见面。这也是我第一次在线下和大家分享，希望大家喜欢。
我这次分享的主题是《Vue Vapor：重新发明》

[click] 本次演讲我们将一起来探索无虚拟 DOM 的 Vue。内容会有深入的地方，也有一些轻松的部分。
-->

---
layout: intro
growSeed: 15
growOpacity: 0.3
class: p-20
---

# 三咲智子 <span text-10 opacity-80 font-hand font-semibold>Kevin Deng</span>

<div class="[&>*]:important-leading-10 opacity-90">

核心团队成员 {Vue} / {VueUse}<br>
作者 {Vue Vapor} / {Vue Macros} / {Elk}<br>
维护者 {Unplugin}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center op85>
  <div i-ri-github-line op50 ma text-xl />
  <div><a href="https://github.com/sxzz" target="_blank" border-none="!">sxzz</a></div>

  <div i-ri-twitter-line op80 ma text-xl ml4 text="#1DA1F2" />
  <div><a href="https://twitter.com/sanxiaozhizi" border-none="!" target="_blank">sanxiaozhizi</a></div>

  <div i-ri-bilibili-line op80 ma text-xl ml4 text="#20B0E3" />
  <div><a href="https://space.bilibili.com/24679024" target="_blank" border-none="!" text-nowrap>三咲智子</a></div>
</div>


<img src="https://raw.githubusercontent.com/sxzz/static/main/avatar.png" rounded-full w-40 abs-tr mt-32 mr-30 />

<!--
好，首先先来做一下自我介绍！我是 Vue、VueUse 的核心团队成员之一。
也是 Vue Vapor、Vue Macros 和 Elk 的作者。可能是最年轻的 Vue 核心成员。
同时还在维护 Unplugin 等项目。

如果你对我感兴趣，可以在 GitHub、Twitter （也就是现在的 X），或者在 Bilibili 上关注我。
我偶尔会在 B 站上直播写代码。

我是在前年加入 Vue 团队的，现在主要是在维护 Vue 相关生态的项目，也会在 GitHub 上做一些自己感兴趣的东西（比如说前端工具链）。
-->

---
layout: statement
grow: left
---

# 👂 听过 Vue Vapor 吗？

<img v-click src="/vvv.png" w="1/3" ma mt20 rounded-2xl />

<!--

好，我们进入正题

[click] 我们来做一个投票，现场有多少人之前听过 Vue Vapor? 有多少人尝试过跑 Demo？或者甚至贡献过 Vapor？
我们这有个二维码，各位可以扫一扫，投个票

TODO live data
-->

---
layout: statement
grow: right
---

<h1>🙋 为什么叫 Vapor？</h1>

<img v-click mt10 src="/vue-vapor-banner.png" w="3/4" ma rounded-3xl />

<!--

可能有人会好奇，为什么叫 Vue Vapor？

[click] Vapor 的中文是蒸汽。有个寓意我们希望 Vue Vapor 能够更轻量，更快速，更灵活，就像蒸汽一样。

当然 Vapor 的灵感来源于一个叫做 Solid 的框架，Solid 是固体的意思。
我们也希望 Vapor 能够成为 Vue 版本的 Solid。

-->

---
layout: statement
---

<div transition transition-500
  :class="$clicks > 0 && 'translate-y--40 scale-60 op80'">
  <div transition transition-500 font-fast text-6 mb2 :class="$clicks > 0 ? 'op70' : 'op0'">What's Vue Vapor?</div>
  <h1>Vue Vapor 是什么？</h1>
</div>

<div transition transition-500 text-xl font-semibold mt--10>

<h1 v-click ma>🌟 全新的渲染机制</h1>
<div v-click absolute top-55 left-80>无虚拟 DOM</div>
<div v-click absolute top-55 left-123>提升性能</div>
<div v-click absolute top-55 left-158>减少包体积</div>
<div v-click absolute top-85 left-95>基于响应性 <code>@vue/reactivity</code></div>

</div>

<!--
好，那么 Vue Vapor 到底是什么呢？

[click] Vue Vapor 是一个全新的渲染机制。那有什么特点？或者我们想达到什么目标？

[click] 首先，它不再需要虚拟的 vDOM，而是直接操作 DOM API。

[click] 这样可以减少很多开销，提高性能，占用更少的内存。

[click] 同时也可以减少包体积，直接使用 DOM API 也会减少很多代码量
比如说 vDOM diff 相关的代码。

[click] 基于 `@vue/reactivity` 的响应性系统，我们可以精确地追踪数据的变化，
做到哪里需要更新就更新哪里，而不是整个组件重新渲染，前后对比 vDOM 更新。

这些都是我们想要达到的目标。
-->

---
clicks: 7
grow: right
---
<h1>原理 <sup text-5 op60 font-fast>mechanism</sup></h1>

<div v-click="1" mt-4>

````md magic-move {lines: true, at:2}

```ts {all|1-5,19-20|7-16|all}
// 初始化
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')
button.textContent = 'Increase'

button.addEventListener('click', increase) // 注册事件
let count = 0
const render = () => {
  label.textContent = `Count: ${count}`
}
function increase() {
  count++
  render() // 重新渲染
}
render() // 首次渲染

document.body.append(container)
container.append(label, button)
```
```ts {1,11-19}
import { ref } from '@vue/reactivity'

// 初始化
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')
button.textContent = 'Increase'

button.addEventListener('click', increase) // 注册事件
const count = ref(0)
const render = () => {
  label.textContent = `Count: ${count.value}`
}
function increase() {
  count.value++
  render() // 重新渲染
}
render() // 首次渲染

document.body.append(container)
container.append(label, button)
```
```ts {1,11-16|all}
import { effect, ref } from '@vue/reactivity'

// 初始化
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')
button.textContent = 'Increase'

button.addEventListener('click', increase) // 注册事件
const count = ref(0)
effect(() => {
  label.textContent = `Count: ${count.value}`
})
function increase() {
  count.value++
}

document.body.append(container)
container.append(label, button)
```
````

</div>

<!--
接下来我们来看一下 Vue Vapor 的原理。不用担心过于复杂，我们会一步一步来看。

[click] 假设我们现在从头开始做一个计数器 App，不使用任何框架，只用原生的 DOM API。

[click] 首先我们创建一个 div，一个 h1 和一个 button，最后把它们添加到页面上。

[click] 我们定义一个 `count` 变量，然后给 button 添加一个点击事件，每次点击后 `count` 加一，
然后调用 `render` 函数重新把 count 渲染到页面上。

[click] 这就是一个基础的计数器 App 的实现。好像也不是很难对吧？

现在我们如果引入 `@vue/reactivity`，我们可以把 `count` 变成响应式的。
[click] 我们只需要把 `count` 变成 `ref(0)`，然后在 `increase` 函数里面改成 `count.value++`。
但这样做并没有什么好处，我们还是需要手动调用 `render` 函数来更新页面。

[click] 我们可以使用 `effect` 函数，把 `render` 函数放到 `effect` 里面。
这样 `render` 函数会在 `count` 变化的时候自动调用。

[click] 这个 demo 只有一个 increase，但是如果还有 decrease 之类很多个地方都需要考虑重新渲染，
我们就不必担心哪里可能需要更新，也不用手动调用 `render` 了。

这基本上就是 Vue Vapor 最基础的原理。我们使用 `@vue/reactivity` 来追踪数据的变化，
然后在数据变化的时候自动调用 `render` 来更新某个需要更新的 DOM 节点。

-->

---
layout: two-cols
grow: right
growOpacity: 1
---

<h1>Vapor SFC 编译 <sup text-5 op60 font-fast>compilation</sup></h1>

<div mt5>

```vue {all|1|all}
<script setup vapor>
import { ref } from 'vue'

const count = ref(0)

function incrase() {
  count.value++
}
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button @click="incrase">Incrase</button>
</template>
```

</div>

::right::

<div v-click="2" mt5>

```js {all|5-7|11-14|16-21|all}
import { delegate, delegateEvents, renderEffect, setText,
         template } from 'vue/vapor'
import { ref } from 'vue'

const t0 = template('<h1>')
const t1 = template('<button>Incrase')
delegateEvents('click')

export default {
  setup() {
    const count = ref(0)
    function incrase() {
      count.value++
    }

    const n0 = t0()
    const n1 = t1()
    delegate(n1, 'click', () => incrase)
    renderEffect(() => 
      setText(n0, 'Count: ', count.value))
    return [n0, n1]
  },
}
```

</div>

<!--

接下来看看 Vapor 的 SFC（也就是 .vue 文件）编译示例。

[click] 我们可以看到，它和 vdom 模式的 SFC 文件几乎一样，只是 script 标签多了一个 vapor 属性。
表明它是一个 Vapor 组件。

[click] 这是 SFC 编译后的代码，我们来一步一步看一下。

[click] 首先它会把模板编译成一个个的模板片段，然后把事件代理到根节点上。
这样可以减少事件监听器的数量，优化性能。

[click] 然后我们在 setup 里面定义了 count 和 incrase 函数

[click] 最后几行代码就是把事件代理到根节点上，然后用 `renderEffect` 来追踪数据的变化，

[click] 值得一提的是，渲染相关的逻辑和 setup 中的代码一样，只会执行一次。
只有确实需要更新的时候，才会重新执行 renderEffect 中的代码。
而在 vdom 模式中，每次数据变化都会重新执行一整个 render 函数。

-->

---

<h1>性能 <sup text-5 op60 font-fast>performance</sup></h1>

- js-framework-benchmark
- drop something

---

<h1>包体积 <sup text-5 op60 font-fast>bundle size</sup></h1>

---
layout: statement
---

<div transition transition-500 :class="$clicks > 0 && 'translate-y--40'">
  <div transition transition-500 font-fast text-4 mb2 :class="$clicks > 0 ? 'op70' : 'op0'">breaking changes?</div>
  <h1>破坏性改变？</h1>
</div>

<h1 v-click transition transition-500 :class="$clicks > 0 && 'scale-200'">🙅 No!</h1>

---

# 子集

TODO

subset/migration

- Composition API + Vue SFC `<script setup>` + no internal API
- Drop Options API
  - Maybe as 3rd party library?
- Drop CDN/browser usage

---

<h1>兼容性 <sup text-5 op60 font-fast>compatibility</sup></h1>

TODO

- VueUse?

- Vue Router?
- Pinia?
- UI lib? Naive-ui, element-plus, vuetify
- Nuxt?
- Elk
- Vue 2

---

# no extra feature

TODO

- Roadmap in the future: RFC -> Vue Macros -> Vue Vapor -> Vue core
- feature flag /
- default to TS

---

# Current progress

TODO

---

# Devtools

TODO

---

# interop

TODO

---

# JSX/TSX

TODO

---

# Thanks Vapor Team

TODO

---

# Sponsors

TODO

---
layout: intro
class: text-center pb-5
title: 感谢！
growOpacity: 0.7
growSeed: 1
---

# 感谢

<div op80>

幻灯片可稍后在 <ri-github-fill/> [github.com/sxzz/talks](https://github.com/sxzz/talks) 浏览

</div>

<div text-sm>
  💖
  <span op70>感谢
    <a href="https://github.com/antfu" target="_blank">Anthony Fu</a>，
    幻灯片由 <img src="/slidev.svg" w-1em inline /> <a href="https://sli.dev/" target="_blank"> Slidev</a>
    强力驱动！
  </span>
</div>

<!-- 
最后，今天我的分享就到这里了。
如果大家对 Vue Vapor 有兴趣，可以在 GitHub 上关注 Vue Vapor 的进展。

也需要大力感谢一下 Slidev 的作者 Anthony Fu，没有他就没有这么好看的 PPT！
感谢大家，下面是 Q&A 环节。
-->

---
layout: fact
---

# Q & A

<!--
- Rust compiler

感谢大家，下次见！
-->
