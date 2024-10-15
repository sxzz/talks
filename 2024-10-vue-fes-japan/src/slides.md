---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'Vue Vapor: Reinvention'
mdc: true
layout: cover
growSeed: vue
growOpacity: 0.6
---

# Vue Vapor: Reinvention

<h2 font-jp>Vue Vapor：再発明</h2>

<div v-click op70 mt10 font-italic>Exploring Vue Without the Virtual DOM</div>

<div abs-br mr-10 mb-10 flex scale-120 opacity-80>
  <div flex flex-col items-center justify-center gap1>
    <a href="https://vuefes.jp/2024/" target="_blank" border-none="!">
      <img src="/vue-fes-japan.svg" w30 invert hue-rotate-180 />
    </a>
    <div text-sm>2024-10-19</div>
  </div>
</div>

<!--
Hello everyone, I'm very excited to be here at Vue Fes Japan, and meet all of you.
This is actually my first offline talk in English, so I hope you enjoy it.
First, let me say hi in Japanese as well.

[JP] 
皆さん、こんにちは。はじめまして。よろしくお願いします。
<ruby>今日 の<rt>Kyō no</rt>
プレゼンテーション<rt>pu re zen tē shon</rt>
の<rt>no</rt>
テーマ<rt>Tēma</rt>
は「Vue Vapor：<rt></rt>
再発明<rt>Sai hatsumei</rt>
」です。
</ruby>

OK, today I'll be talking about "Vue Vapor: Reinvention."

[click] In this talk, we're going to explore Vue without the Virtual DOM.
Some of this might be a little technical, but I promise there are fun parts too!
-->

---
layout: intro
growSeed: 15
growOpacity: 0.3
class: p-20
---

<h1 font-hand>Kevin Deng <sup opacity-80 font-jp text-4xl>三咲智子</sup></h1>

<div class="[&>*]:important-leading-10 opacity-90">

Author of {Vue Vapor} / {Vue Macros} / {Elk}<br>
Core team member of {Vue} / {VueUse} / {UnJS}<br>
Team member of {Unplugin} / {Vite} / {Oxc}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center op85>
  <div i-ri-github-line op50 ma text-xl />
  <div><a href="https://github.com/sxzz" target="_blank" border-none="!">sxzz</a></div>

  <div i-ri-twitter-line op80 ma text-xl ml4 text="#1DA1F2" />
  <div><a href="https://twitter.com/sanxiaozhizi" border-none="!" target="_blank">sanxiaozhizi</a></div>
</div>

<img src="https://raw.githubusercontent.com/sxzz/static/main/avatar.png" rounded-full w-40 abs-tr mt-32 mr-30 />

<!--
Alright, let me introduce myself! I’m the author of Vue Vapor, Vue Macros, and Elk. I’m also a core team member of Vue, VueUse and UnJS. Plus, involved with Unplugin, Vite, and Oxc.

If you're interested in my activities, you can find me on GitHub and Twitter.

I joined the Vue team two years ago and might be the youngest core member. Now, I essentially maintain projects within the Vue and unplugin ecosystem. And also work on frontend toolchains.
-->

---
layout: statement
growHide: 'true'
---

<div op80 font-jp mb2>「Vue Vapor」を聞いたことがありますか？</div>
<h1 text-3xl="!">👂 Have you heard of Vue Vapor?</h1>

<section flex items-center justify-around mt="-18">
  <img v-click src="/vvv.png" w="1/4" rounded-2xl translate-x="20" />
  <VoteAnalysis v-click v-if="$slidev.nav.currentPage === 3 || $slidev.nav.currentPage === 4" scale-70 />
</section>

<!--
Alright, let’s dive into the main content.

[click] First, let’s do a quick poll. Here’s a QR code, feel free to scan it and cast your vote. How many of you have heard of Vue Vapor before? How many of you have tried building a demo? Or even contributed to Vapor?

[click] The results will be displayed in real-time, so you can see how many people are familiar with Vue Vapor.
-->

---
layout: statement
grow: right
---

<div op80 font-jp mb2>なぜ「Vapor」と呼ばれるのですか？</div>
<h1 text-3xl="!">🙋 Why is it called Vapor?</h1>

<div v-click flex="~ col" gap4>
  <img mt6 src="/vue-vapor-banner.png" w="3/4" ma rounded-3xl />
  <div op70 text-sm>&copy; Made by icarus.gk</div>
</div>

<!--
Some of you might be wondering, why is it called Vue Vapor?

[click] Cuz we hope Vue Vapor can be lighter, faster, and more flexible. Just like steam, it carries symbolic (suhm·**bo**·luhk) meaning.

Of course, the inspiration for Vapor comes from Solid.js. We hope Vapor can become the Vue version of Solid.
-->

---
layout: statement
---

<div transition transition-500
  :class="$clicks > 0 && 'translate-y--40 scale-60 op80'">
  <div transition transition-500 ease-in-out font-jp text-7 mb2 :class="$clicks > 0 ? '' : 'op0'">Vue Vaporとは何ですか？</div>
  <h1>What is Vue Vapor?</h1>
</div>

<div transition transition-500 text-xl font-semibold mt--10>
  <h1 v-click ma>New rendering mechanism</h1>
  <div v-click absolute top-58 left-30>No Virtual DOM</div>
  <div v-click absolute top-58 left-100>High performance</div>
  <div v-click absolute top-58 left-170>Smaller bundle size</div>
  <div v-click absolute top-91 left-85>Based on <code>@vue/reactivity</code></div>
</div>

<!--
So, what exactly is Vue Vapor?

[click] Vue Vapor introduces a new rendering mechanism. What are the key features, and what goals are we aiming to achieve?

[click] First, it no longer relies on the virtual DOM; instead, it directly call native DOM API.

[click] Second, This reduces lots of overhead, improves performance, and consumes less memory.

[click] It also reduces bundle size. By using native DOM API directly, we removed the code for virtual DOM nodes diff.

[click] And fine-grained rendering. Based on `@vue/reactivity` system, we can precisely track data changes, and updating only what needs to be updated. Instead of re-rendering the entire component and find the changed vDOM nodes.

So, these are the goals we aim to achieve with Vue Vapor.
-->

---
class: text-center
---

<div op60 font-jp>バンドルサイズ</div>
<h1>Bundle size</h1>

<div v-click mt30>
  <template v-if="$clicks === 1">
    <AnimateNumber v-slot="{ number, target }" :value="53.3" :duration="500">
      <div text-7xl font-mono font-bold text-gradient :style="{ transform: `scale(${1 + (number / target / 4)})` }">{{ number.toFixed(1).padStart(4, '0') }}%</div>
    </AnimateNumber>
    <div op80 mt-7 text-2xl flex gap1 items-center justify-center>
      <div scale-120 i-ri:arrow-down-double-line animate-pulse animate-duration-1000  />
      Reduced compared to vDOM mode
    </div>
    <div op60 mt-2 font-jp>vDOMモードと比較して削減されました</div>
    <div mt30 text-sm op60>* Comparison of Vapor and vDOM runtime only</div>
  </template>
</div>

<!--
As I said Vapor can reduce the bundle size, right? But how much?

[click] Currently, it decreased by fifty-three point three percent (53.3%) compared to vDOM mode.
This figure compares rendering logic code of Vapor to vDOM mode, excluding reactivity system code.
-->

---
class: text-center
---

<div op60 font-jp>性能</div>
<h1>Performance</h1>

<div mt10 px10 flex flex-col gap2 relative>
  <div v-click="5" font-hand abs-tr top="-14" rotate-13 text-2xl>Longer is better!</div>
  <PerformanceProgress v-click name="Vanilla JS" :progress="100" icon="i-logos:javascript" />
  <PerformanceProgress v-click name="Solid.js" :progress="93.4" icon="i-logos:solidjs-icon" />
  <PerformanceProgress v-click name="Svelte" secondary="Classic" :progress="90" icon="i-logos:svelte-icon" />
  <PerformanceProgress v-click name="Vue Vapor" :progress="90" icon="i-logos:vue" highlight />
  <PerformanceProgress v-click name="Vue vDOM" :progress="80.6" icon="i-logos:vue" />
  <PerformanceProgress v-click="5" name="React" secondary="Jotai" :progress="68" icon="i-logos:react" />

  <p mt10="!" text-xs op60 v-click="5">
  * <a href="https://x.com/sanxiaozhizi/status/1842807976157155432/photo/1" target="_blank">The results</a> are based on <a href="https://github.com/krausest/js-framework-benchmark" target="_blank">js-framework-benchmark</a>, and tested on a MacBook Pro M1 Max.
  </p>

</div>

<!--
Let's dive into how Vapor stacks up against other frameworks in terms of performance.

[click] First, we have Vanilla JavaScript, which is the gold standard for speed.
[click] Solid.js comes really close, with impressive performance.
[click] Svelte also delivers exceptional speed.

[click] Now, Vue Vapor is on par with Svelte, which is quite impressive.

[click] It's noticeably faster than Vue vDOM mode and React with Jotai.

Even though Vapor already surpasses Vue vDOM and React, there's still room for improvement, and we're dedicated to making it even better.
-->

---
layout: statement
---

<div transition transition-500 ease-in-out :class="$clicks > 0 && 'translate-y--30'" relative>
  <div transition transition-500 ease-in-out font-jp text-4 mb2 :class="$clicks > 0 ? 'op70' : 'op0'" line-through>破壊的変更</div>
  <h1 transition transition-500 ease-in-out v-mark.red.linethrough="{at: 1, strokeWidth: 3, iterations: 4, roughness: 1.6, maxRandomnessOffset: 8, seed: 18 }" w-fit ma="!" :class="$clicks === 1 && 'op70 scale-80'">Breaking changes</h1>
</div>

<h1 v-click transition transition-500 :class="$clicks > 0 && 'scale-150'">🙅<br>No!</h1>

<!--
Since Vapor has so many improvements, then will Vapor have breaking changes compared to the virtual DOM?

[click] Not exactly. Vapor aims to be a subset of vDOM mode.
-->

---
clicks: 4
class: ml10
---

<h1>Subset <sup text-5 op60 font-jp>部分集合</sup></h1>

Vue Vapor is a subset of Vue vDOM mode.

<v-clicks at="2" class="[&>li]:mb-5" mt15>

- Supports Composition API only
  - Options API might be provided as <br/> a third-party library?
- Requires build tools for compilation <br/> (Vite / Webpack...)
- Supports only `<script setup>`

</v-clicks>

<div
  v-click="1"
  absolute w-120 h-120 left-110 top-10 border="~ green rounded-full"
  bg-green:20 text-3xl text-green flex="~ items-center"
>
  <div flex="~ col items-center justify-center" gap2 ml20>
    <div i-logos-vue text-6xl />
    <span font-semibold>vDOM</span>
    <ul text-sm op70>
      <li>Composition API</li>
      <li>Options API</li>
      <li>Custom Directives</li>
      <li>Mixins...</li>
    </ul>
  </div>
</div>

<div
  v-click="2"
  absolute w-60 h-60 left-166 top-40 border="~ blue/50 rounded-full"
  bg-blue:10 text-2xl text-blue-200 flex="~ gap-3 items-center justify-center"
  transition-all duration-500 ease-in-out
  :class="$clicks >= 2 ? '' : 'scale-0'"
>
  <div flex="~ col items-center justify-center" gap2>
    <span font-semibold>Vapor 💨</span>
    <ul text-sm op70>
      <li>Composition API</li>
      <li><code>&lt;script setup&gt;</code></li>
    </ul>
  </div>
</div>

<!--
[click] First up, the current vDOM mode supports a bunch of features like the Options API, Composition API, custom directives, Mixins, and more.

[click] Now, Vapor is a bit different. It currently supports only the Composition API and doesn't include the Options API. But based on feedback, we might provide the Options API as a third-party library in the future.

[click] Vapor needs a build tool for compilation, so it can't run directly in the browser, like with CDN imports. 

This is because Vapor’s compiler is quite complex and relies on toolchains like Babel. Running it in the browser would slow things down and bloat the bundle size, making it less efficient than using vDOM mode.

[click] Lastly, Vapor only supports `<script setup>`, so you can't export components with a normal `<script>`. Cuz `<script setup>` is the best practice for the Composition API, and by dropping the Options API, the compiler can optimize the code more effectively.
-->

---
class: ml20
grow: right
---

<h1>Compatibility <sup text-5 op60 font-jp>互換性</sup></h1>

Compatibility plans

<v-clicks>

- {VueUse}

- {Vue Router} <span op80> / Pinia</span>
- Vite SSG / {VitePress}
- {Nuxt}
- UI Libraries
  - Naive UI / Element Plus / Vuetify...
- {Elk}
- <span v-mark.red.linethrough="8">Vue 2</span>

</v-clicks>

<!--
Let’s talk about compatibility plans.

[click] Vapor is currently compatible with most VueUse functions, and that’s because its reactivity system is fully aligned with Vue virtual DOM. Aside from some component-related functions, everything else works directly.

[click] Vapor will also be compatible with official projects like Vue Router and Pinia.

[click] The next step includes Vite SSG and VitePress.

[click] And in the future, Nuxt will support Vapor as well.

[click] We’ll help the community adapt UI libraries like Naive UI, Element Plus, and Vuetify. The adaptation won’t be as difficult as the jump from Vue 2 to Vue 3, since Vapor and the virtual DOM share the same user-side API.

[click] Once Nuxt supports Vapor, we’ll make sure Elk does too. Elk is a community project and a great example of using Vue and Nuxt together.

[click] Will Vue 2 support Vapor? [click] No, it won’t. Since Vue 2 reached the end of life this year, we’re not adding any new features to it.
-->

---
class: ml20
layout: two-cols-header
---

<h1 important-mb6>Roadmap <sup text-5 op60 font-jp>計画</sup></h1>

::left::

- ✅ SFC Compilation

- ✅ [Basic Component Capabilities](https://github.com/vuejs/vue-vapor/issues/197)
  - Built-in Directives
  - Lifecycle Hooks
  - ...
- ✅ Voting App

::right::

<div v-click>

- 🚧 SSR / Hydration

- 🚧 Vue DevTools
- 🚧 Built-in Components
- 🚧 Async Components
- 🚧 Unit Tests Coverage

</div>

::bottom::

<div v-click="2" mt="-15">
💰 If funding is provided, we plan launch Vite SSG support and alpha releases by the end of this year.
</div>

<!--
How is the progress so far?

We have already completed most of the foundational features, such as SFC compilation, all built-in directives, lifecycle hooks, and more.

It’s worth mentioning that the voting app you all just used was implemented using Vapor.

[click] Next, we will continue to optimize performance, support SSR and hydration, adapt DevTools, improve the built-in components, and finally support async components.

[click] Our roadmap depends on securing enough funding and sponsorship for Vue Vapor. If we receive enough support, we plan to launch Vite SSG support and alpha releases by the end of this year.
-->

---
class: text-center
growSeed: 1
growOpacity: 0.8
---

# DevTools

<div flex w-full items-center justify-center gap2>
  <div op80>Thanks to the Vue DevTools team</div>
  <img src="https://avatars.githubusercontent.com/u/22515951" w-6 rounded-full />
  <a op80 href="https://github.com/webfansplz" target="_blank">webfansplz</a>
</div>

<img ma src="/devtools.jpg" h-105 mt-0 op80 />

<!--
As I mentioned, Vapor already has partial support for Vue DevTools, and big thanks to the Vue DevTools team for making that possible!
-->

---
layout: fact
---

<div relative>
<h1>
Support JSX
<span transition transition-500 :class="$clicks > 0 && 'op0'">?</span>
<div v-click inline-block translate-x="-11!">!</div>
</h1>

<pre v-click="1" op50 font-mono abs-tr top="-8" rotate-10>
&lt;Vapor JSX={true} /&gt;
</pre>
</div>

<div v-click flex="~ col" gap4 items-center justify-center text-xl mt10>
  <div flex gap2 items-center>
    <div i-logos:npm-icon />
    <code>unplugin-vue-jsx-vapor</code>
  </div>
  <div flex w-full items-center justify-center gap2>
    <div op80>Thanks to </div>
    <img src="https://github.com/zhiyuanzmj.png" w-6 rounded-full />
    <a op80 href="https://github.com/zhiyuanzmj" target="_blank">zhiyuanzmj</a>
  </div>
</div>

<!--
Some people have been asking, will Vapor support JSX? [click] The answer is yes! JSX is supported in Vapor, and will be even better than in vDOM mode.

[click] You can start using it right now. Huge thanks to Gaofei for his contribution!

In the future, we might integrate JSX support directly into Vue Vapor's codebase. This is possible because of Vapor’s more flexible compiler architecture, which makes adding JSX support much easier.
-->

---
clicks: 7
grow: right
---

<h1>Mechanism <sup text-5 op60 font-jp>メカニズム</sup></h1>

Vue Vapor is based on the `@vue/reactivity` system, updating the DOM by tracking data changes.

<div v-click="1" mt-4>

````md magic-move {lines: true, at:2}
```ts {all|1-5,18-19|7-16|all}
// Initialize
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')
button.textContent = 'Increase'

button.addEventListener('click', increase)
let count = 0
const render = () => {
  label.textContent = `Count: ${count}`
}
function increase() {
  count++
  render() // Re-render
}
render() // Initial render

document.body.append(container)
container.append(label, button)
```

```ts {1,10-18}
import { ref } from '@vue/reactivity'

// Initialize
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')
button.textContent = 'Increase'

button.addEventListener('click', increase)
const count = ref(0)
const render = () => {
  label.textContent = `Count: ${count.value}`
}
function increase() {
  count.value++
  render() // Re-render
}
render() // Initial render

document.body.append(container)
container.append(label, button)
```

```ts {1,11-16|all}
import { effect, ref } from '@vue/reactivity'

// Initialize
const container = document.createElement('div')
const label = document.createElement('h1')
const button = document.createElement('button')
button.textContent = 'Increase'

button.addEventListener('click', increase)
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
Next, I’ll walk you through the principles of Vue Vapor. Don’t worry if it feels complex—we’ll take it step by step.

[click] Imagine we’re building a basic counter app from scratch, with no framework, just native DOM APIs.

[click] First, we create a `div`, a title, and a button, then add them to the body.

[click] We define a `count` variable and add a click event to the button. Every time it’s clicked, `count` is added by one, and then we call a `render` function to update the count on the page.

[click] That’s a basic counter app—pretty simple, right? Just a bit tedious to write.

Now, if we bring in `@vue/reactivity`, we can make `count` reactive.

[click] All we need to do is wrap `count` with `ref`, and in the `increase` function, update it with `count.value++`. But still, we’re manually calling the `render` function to update the page.

[click] To automate that, we can use the `effect` function and put the `render` function inside it. Now, the `render` function will automatically trigger whenever the reactive `count` changes.

[click] This demo only has an `increase` function, but imagine if we had a `decrease` or more functions. We’d have to worry about calling `render` each time, which can get messy. Also, blindly re-rendering everything would slow down performance.

With reactivity, we don’t need to worry about where updates are needed or forget to manually call `render`. 

This is the core principle behind Vue Vapor. To sum it up: we use `@vue/reactivity` to track data changes, and whenever the data changes, the `render` function automatically updates only the specific DOM node that needs it.
-->

---
layout: statement
---

<div transition transition-500 font-bold :class="$clicks > 0 ? 'translate-y--10 scale-60 op90' : 'translate-y-30'">
  <h1 font-mono important-m0>UI = fn(state)</h1>
</div>

<div text-left flex flex-wrap gap8 items-center justify-center>
  <div v-click flex flex-col gap3 p4 w-85 rounded-xl bg="#58c4dc/30" :class="$clicks !== 1 && 'op60'">
    <span flex gap2 items-center text-2xl font-semibold self-center><div i-logos:react /> React</span>
    <span font-mono text-sm>while (stateChanged) <br>&nbsp;&nbsp;UI snapshot = fn(data snapshot)</span>
  </div>
  <div v-click flex flex-col gap3 p4 w-85 rounded-xl bg="green/30"  :class="$clicks !== 2 && 'op60'">
    <span flex gap2 items-center text-2xl font-semibold self-center><div i-logos:vue /> Vue vDOM</span>
    <span font-mono text-sm>while (stateChanged) <br>&nbsp;&nbsp;UI snapshot = fn(state)</span>
  </div>
  <div v-click flex flex-col gap3 items-center justify-center p4 w-85 h-30 rounded-xl bg="sky-600/50">
    <span flex gap2 items-center text-3xl font-semibold>💨 Vue Vapor</span>
    <span font-mono>UI = fn(state)</span>
  </div>
</div>

<!--
When we talk about React, the concept is UI = fn(state). Here, both state and UI are snapshots at a specific moment, right? 

[click] When the state changes, the UI snapshot is recreated and compared with the native DOM nodes.

[click] In contrast, Vue vDOM mode operates a bit differently. The UI is still a snapshot, but the state is reactive. When Vue detects a change in the state, it re-runs the render function to generate a new UI snapshot, which is somewhat similar to React.

[click] However, in Vue Vapor, neither the state nor the UI is a snapshot anymore. Instead, the render function runs only once, which means there's only one UI object.

When state changes, we directly modify attributes of the DOM object instead of creating a new one and comparing them, which is more efficient.

A snapshot is immutable internally, but in Vapor, the UI object is mutable on the inside while appearing immutable externally. This is the key difference between Vapor and the virtual DOM model.
-->

---
layout: two-cols-header
grow: right
growOpacity: 1
---

<h1>Vapor SFC Compilation <sup text-5 op60 font-jp>コンパイル</sup></h1>

::left::

<div mt5 mr5>

```vue {all|1|all}
<script setup vapor>
import { ref } from 'vue'

const count = ref(0)

function increase() {
  count.value++
}
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button @click="increase">Increase</button>
</template>
```

</div>

::right::

<div v-click="2" mt5>

<!-- prettier-ignore-start -->
```js {all|5-7|11-14|16-21|all}
import { ref } from 'vue'
import { delegate, delegateEvents, renderEffect, setText,
         template } from 'vue/vapor'

const t0 = template('<h1>')
const t1 = template('<button>Increase')
delegateEvents('click')

export default {
  setup() {
    const count = ref(0)
    function increase() {
      count.value++
    }

    const n0 = t0()
    const n1 = t1()
    delegate(n1, 'click', () => increase)
    renderEffect(() => setText(n0, 'Count: ',
                               count.value))
    return [n0, n1]
  },
}
```
<!-- prettier-ignore-end -->

</div>

<!--
Next, let’s look at an example of Vapor SFC compilation. SFC refers to `.vue` files, and as you can see, it's almost the same thing as vDOM SFC.

[click] The main difference is the `vapor` attribute added to the script tag, which tells us it’s a Vapor component.

[click] Now, let’s walk through the compiled SFC code step by step.

[click] First, the template is compiled into individual fragments, and event handling is proxied to the root node. This reduces the number of event listeners and helps with performance.

[click] Next, we define the `count` variable and the `increase` function inside the `setup`.

[click] The last few lines of code handle the core rendering logic. We bind the event handler to the node and use `renderEffect` to track any data updates.

[click] After that, only the code inside `renderEffect` runs whenever updates are needed.
-->

---
clicks: 6
---

<h1>Architecture <sup text-5 op60 font-jp>アーキテクチャ</sup></h1>

<Architecture v-click />

<!--
So, how is Vapor’s architecture flexible?

[click] This diagram shows the call logic for an SFC.
[click] First, we have a top-level Vite plugin for the user, which calls the SFC compiler.

[click] The SFC compiler extracts the template tag and passes it to the Vapor compiler, which finally compiles it into JavaScript code.

In particular, the internal process is:
1. First, the `parse` phase, where the content is parsed into an HTML AST (AST is Abstract Syntax Tree).
2. Then it enters the `transform` phase, where the AST is transformed into IR (that is Intermediate Representation). We will talk more about it later.
3. Finally, the `generate` phase converts the IR into JavaScript code. This is the final output.

[click] So, how do we handle JSX files?

[click] First, just like with SFC, we have a user-facing plugin.

[click] The plugin calls the core JSX compiler, and compiler has its own `parse` and `transform` phases. But the final `generate` phase can reuse the Vapor compiler, because the IR for both SFC and JSX follows the same set of conventions.

In addition, Vapor currently supports browsers only, but in the future, they will be split into a general-purpose runtime and a package specific to browser DOM APIs. Just like vDOM, This will make it easier to support other platforms, like native mobile apps.
-->

---

<h1 text-center>
  I<span text-2xl>ntermediate</span> R<span text-2xl>epresentation</span>
  <sup text-5 op60 font-jp>中間表現</sup>
</h1>

<div flex gap8 items-stretch mt30>

  <div v-click bg-gray:30 px4 py2 rounded flex-1>
  <h3 mb4 text-center>Actions</h3>

  - Template Fragments
  - Event Bindings
  - Inserts / appends DOM nodes
  - Set attributes / properties
  - ...

  </div>

<div v-click bg-gray:30 px4 py2 rounded flex-1>
  <h3 mb4 text-center>Targets</h3>

  - Vue template
  - Svelte template
  - JSX
  - ...

  </div>

</div>

<!--
IR stands for Intermediate Representation. So how does Vapor use IR, and what does it do?
I say it's a middleman between the template and the final JavaScript code.

[click] It defines some key actions, like creating template fragments, binding events, inserting or appending DOM nodes, setting attributes or properties, and more.

This means whatever template syntax is used, as long as it can generate the target IR following the standards of Vapor, we can compile it to Vapor runtime code.

[click] The IR can target different template syntaxes, like Vue template, Svelte template, JSX, and more. This makes it easier to support different template syntaxes.
-->

---
layout: full
growOpacity: 0
class: p0
---

<div w-full h-full flex flex-col gap3 important-p0>
  <iframe flex-1 src="https://vapor-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gIDxpbWcgdi1pZj1cInggPiAxMFwiIDpzcmM9XCJzcmNcIiAvPlxuPC9kaXY+Iiwic3NyIjpmYWxzZSwib3B0aW9ucyI6e319" rounded />
  <iframe flex-1 src="https://svelte-vapor-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gIHsjaWYgeCA+IDEwfVxuICA8aW1nIHtzcmN9IC8+XG4gIHsvaWZ9XG48L2Rpdj4iLCJvcHRpb25zIjp7fX0=" rounded />
</div>

<!--
Alright, let's give it a shot. This is the template explorer for Vue and Svelte.
As you can see, the template syntax is different, but the final output is the same.
Thanks to Kazupon, the Svelte template compiler was implemented by him.

Pretty cool, right? This is the power of IR. It allows us to support different template syntaxes with the same runtime code.
-->

---

<h1 important-mb10>Fusion <sup text-5 op60 font-jp>融合</sup></h1>

<v-click>
<div bg-gray:30 relative z-1000 rounded px4 py1 w-fit>

- Vapor components will support vDOM mode

- vDOM components will support Vapor mode
- Supports pure Vapor mode

</div>
</v-click>

<div
  v-click="1"
  absolute w-160 h-160 left-80 top-10 border="~ green rounded-full"
  bg-green:20 text-3xl text-green flex items-start justify-center
>
  <div flex="~ col" items-center justify-center mt6 gap1>
    <span text-2xl font-semibold>vDOM</span>
  </div>
</div>

<div
  v-click="1"
  absolute w-130 h-130 left-95 top-30 border="~ purple rounded-full"
  bg-purple:20 text-3xl text-purple flex items-start justify-center
>
  <div flex="~ col" items-center justify-center mt6 gap1>
    <span text-2xl font-semibold>Vapor</span>
  </div>
</div>

<div
  v-click="1"
  absolute w-50 h-50 left-110 top-70 border="~ green rounded-full"
  bg-green:20 text-3xl text-green flex items-start justify-center
>
  <div flex="~ col" items-center justify-center mt6 gap1 text-2xl font-semibold>
    <span>vDOM</span>
    <span mt10 tracking-widest>...</span>
  </div>
</div>

<div
  v-click="1"
  absolute w-50 h-50 left-165 top-70 border="~ purple rounded-full"
  bg-purple:20 text-3xl text-purple flex items-start justify-center
>
  <div flex="~ col" items-center justify-center mt6 gap1 text-2xl font-semibold>
    <span>Vapor</span>
    <span mt10 tracking-widest>...</span>
  </div>
</div>

<!--
Now, some of you might ask, should I switch everything to Vapor at once?

[click] The answer is: not necessarily. Vapor components will be compatible with vDOM mode, and vice versa.
Of course, it will also support a pure Vapor mode.

This allows for a smoother transition, without needing to switch everything to Vapor at once. You can migrate performance-critical components to Vapor first, while keeping the other components in vDOM mode.
-->

---
class: ml10
---

<h1>Recap <sup text-5 op60 font-jp>まとめ</sup></h1>

<div mt20>
<v-clicks>

- Vapor is a new beginning for Vue

- Vapor is a subset of Vue vDOM mode, aiming for simplification
- Vapor will continuously optimize performance and bundle size
- Vapor will have better JSX support
- Vapor will launch Vite SSG support and alpha releases by the end of this year, if funding is provided.
</v-clicks>
</div>

<!--
Finally, let me make a brief conclusion.

- [click] Vapor is a new beginning for Vue. We've re-written almost everything from scratch.
- [click] Vapor is a subset of Vue vDOM mode, aiming for simplification
- [click] Vapor will continuously optimize performance and bundle size
- [click] Vapor will have better JSX support
- [click] Vapor will launch Vite SSG support and alpha releases by the end of this year, if funding is provided.
-->

---
growOpacity: 0.5
growSeed: 2
class: text-center
---

<div op60 font-jp>貢献者</div>

# Contributors

<div flex justify-around items-center mt20>
  <GitHub v-click id="yyx990803" label="Vue Creator" name="Evan You" />
  <GitHub v-click transition transition-400 ease-out
          :class="$clicks < 2 && 'translate-x-10'"
          id="sxzz" label="Vue Vapor Creator" name="Kevin Deng" />

<GitHub v-click="3" transition transition-400 ease-out
          :class="$clicks < 3 && 'translate-x-10'"
          id="LittleSound" label="Vue Vapor Team" name="Rizumu Ayaka" />
<GitHub v-click="3" transition transition-400 ease-out
          :class="$clicks < 3 && 'translate-x-10'"
          id="Ubugeeei" label="Vue Vapor Team" />
<GitHub v-click="3" transition transition-400 ease-out
          :class="$clicks < 3 && 'translate-x-10'"
          id="doctor-wu" label="Vue Vapor Team" name="Doctor Wu" />
<GitHub v-click="4" transition transition-400 ease-out
          :class="$clicks < 4 && 'translate-x-10'"
          id="zhiyuanzmj" label="Vapor JSX Creator" name="高飞" lang="zh-CN" />

</div>

<div v-click="4" flex items-center justify-center gap1 op70 mt10>
  <div i-ri:github-fill />
  <a href="https://github.com/vuejs/vue-vapor" target="_blank">github.com/vuejs/vue-vapor</a>
</div>

<!--
I want to take a moment to thank the amazing contributors to Vue Vapor.

[click] First, Evan You originally crafted the initial runtime of Vapor and remains central to its design and decision-making.

[click] Then there's me—I'm currently responsible for developing all aspects of Vue Vapor.

[click] We also have some fantastic active contributors: Rizumu Ayaka, Ubugeeei, and Doctor Wu.

[click] And let's not forget Gaofei, who added JSX support.

Again, I want to give special thanks to Rizumu Ayaka and Doctor Wu for their help with this presentation!

The Vue community is incredibly open—not only does Vapor have many active contributors, but even this presentation had contributors.
-->

---
class: text-center
---

<div op60 font-jp>参加しよう</div>

# Join Us

<div v-click flex items-center justify-center gap1 op80 mt10 text-xl>
  <div i-ri:github-fill />
  <a href="https://github.com/ubugeeei/reading-vuejs-core-vapor" target="_blank">github.com/ubugeeei/reading-vuejs-core-vapor</a>
</div>

<img v-click="1" src="https://ubugeeei.github.io/reading-vuejs-core-vapor/cover-transparent.png" h-100 ma mt="-10" />

<!--
If you’re interested in contributing to Vapor, there’s a project you should check out. [click] reading-vuejs-core-vapor is written by Ubugeeei. It’s a great resource for diving deeper into Vapor’s core principles, covering both the runtime and compiler aspects. Plus, it’s available in both English and Japanese.

So, if that sounds interesting, feel free to explore it on GitHub!
-->

---
class: text-center
---

<div op60 font-jp>支援者</div>

# Sponsors

<div flex items-center justify-center gap1 op70 mb2>
  <div i-ri:heart-3-fill text-pink />
  <a href="https://github.com/sponsors/sxzz" target="_blank">github.com/sponsors/sxzz</a>
</div>

<div flex items-center justify-center gap-12>
  <a href="https://github.com/sponsors/sxzz" target="_blank" border-none="!"
    transition transition-500 ease-in-out :class="[$clicks === 0 && 'translate-x-35']">
    <img src="https://raw.githubusercontent.com/sxzz/sponsors/main/sponsors.circles.svg" h-95 ma object-contain />
  </a>

  <img v-click src="/sponsor.png" max-h-75 rounded-xl />
</div>

<!--
Finally, a huge thank you to everyone who has sponsored me. Your support is my motivation to keep going.

[click] I'm no longer working full-time on Vue, so sponsorship is crucial for me. To continue developing Vue Vapor, I really appreciate any support you can offer. Right now, Vapor cannot proceed without financial support.

If you'd like to sponsor me, you can scan this QR code to do so. Thank you!
-->

---
layout: intro
class: text-center
growOpacity: 0.7
growSeed: 1
---

<h1 font-hand text="8xl!">Thank You</h1>
<h1 font-jp-serif text="3xl!" mb="6!" op90>ありがとうございます</h1>

<div op80 text-5>

The slides will be available later at <ri-github-fill /> [github.com/sxzz/talks](https://github.com/sxzz/talks)

</div>

<div text-4>
  💖
  <span op70>Thanks to
    <a href="https://github.com/antfu" target="_blank">Anthony Fu</a>, 
    the slides are powered by
    <a href="https://github.com/slidevjs/slidev" class="markdown-magic-link markdown-magic-link-link" target="_blank">
      <span class="markdown-magic-link-image" style="background-image: url('https://github.com/slidevjs.png');" />
      Slidev
    </a>
    !
  </span>
</div>

<style>
a {
  border: 0 !important
}
</style>

<!--
That's all for today! Kudos to the translators for their incredible work! Thank you all, and enjoy the rest of the talks!

[JP] ありがとうございます。
-->
