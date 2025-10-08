---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'tsdown: One Tool to Bundle Them All'
mdc: true
layout: cover
growOpacity: 0.6
dragPos:
  logo: 248,139,87,106
---

<div flex justify-between items-center>
<div>

# tsdown

<h2 font-bold>One Tool to Bundle Them All</h2>

<div v-click op80 mt10 font-italic>An elegant library bundler</div>

</div>

<img src="/tsdown.svg" w-50 mr50 drop-shadow-xl v-drag="'logo'"  />
</div>

<div abs-br mr-10 mb-10 flex scale-120 opacity-90>
  <div flex flex-col items-center justify-center gap1>
    <img src="/viteconf.png" w20 />
    <div text-sm>2025-10-09</div>
  </div>
</div>

<!--
Hello everyone, great to see you here at ViteConf!

Today, I’m excited to introduce a library bundler called tsdown.

[click] tsdown is designed to be an elegant solution for bundling libraries. Its goal is to help both frontend and backend developers build and publish their TypeScript libraries more efficiently and easily.

So in this talk, I’ll cover tsdown’s design philosophy, its key features, and how it makes library development simpler and more streamlined.
-->

---
layout: intro
growSeed: 15
growOpacity: 0.6
class: p-20
---

<h1 font-hand text-5xl>Kevin Deng</h1>

<div class="[&>*]:important-leading-10 opacity-90">

Author of {tsdown} / {Vue Macros} / {Elk}<br>
Team member of {Vue} / {VueUse} / {Rolldown} / {Oxc}<br>
Maintainer of {Unplugin} / {Quansync}<br>
Sponsored by {VoidZero}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center op85>
  <div i-ri-github-fill op50 ma text-xl />
  <div><a href="https://github.com/sxzz" target="_blank" border-none="!">sxzz</a></div>

  <div i-ri:bluesky-fill op80 ma text-xl ml4 text="#1083fe" />
  <div><a href="https://bsky.app/profile/sxzz.dev" border-none="!" target="_blank">sxzz.dev</a></div>

  <div i-ri-twitter-fill op80 ma text-xl ml4 text="#1DA1F2" />
  <div><a href="https://twitter.com/sanxiaozhizi" border-none="!" target="_blank">sanxiaozhizi</a></div>
</div>

<img src="https://raw.githubusercontent.com/sxzz/static/main/avatar.png" rounded-full w-50 abs-tr mt-32 mr-30 shadow-xl />

<!--
Let me quickly introduce myself! I’m the author of tsdown, Vue Macros, and Elk. I’m also part of the teams behind Vue, VueUse, Rolldown, and Oxc, and I'm maintaining projects like Unplugin and Quansync.

I’m an independent open-source developer, currently sponsored by VoidZero. If you’re interested in my work, feel free to follow me on GitHub, Bluesky, or Twitter.

These days, I’m mainly focused on maintaining JavaScript toolchain projects, along with a few other random things on GitHub.
-->

---
layout: fact
---

<div mt="-10" flex="~ col" gap4>
<div text-5xl>🤔</div>
<div text-5xl>What is</div>
<h1>Library Bundler?</h1>
</div>

<!--
So, what is a library bundler, exactly?
-->

---
layout: statement
class: text-center
---

# 🔎 Essence

<div flex="~ row items-center justify-center gap-8" mt-20>
  <div flex="~ col items-center gap-2">
    <div flex gap5 text-5xl mb2>
      <div i-logos-typescript-icon />
      <div i-logos-vue />
      <div i-logos-react />
    </div>
    <div text-lg font-bold mt2>All kinds of source code</div>
    <div text-sm op70>TS / Vue SFC / JSX / CSS...</div>
  </div>
  <div i-carbon-arrow-right text-5xl text-gray-400 mx-8 />
  <div flex="~ col items-center gap-2">
    <div i-carbon-package text-5xl text-blue mb2 />
    <div text-lg font-bold mt2>Library outputs ready to use</div>
    <div text-sm op70>ESM / CJS / .d.ts / Minified / Tree Shaking</div>
  </div>
</div>

<div mt-10 text-2xl op90 font-bold v-click>🚀 Your code can be used directly by other projects</div>

<!--
The essence of bundling is to take your source code, like TypeScript, Vue SFCs, or JSX, and turn it into library outputs that other projects can use directly. It automatically handles things like formats, dependencies, and type declarations, bundling everything together. It can also take care of minification and tree shaking.

[click] In short, bundling makes your code ready to use in other projects, right out of the box.

Alex has already covered a lot about bundling, so I won’t repeat those points here.
-->

---
layout: statement
class: text-center
---

# 🤨

# Why Another Library Bundler?

<div mt10 flex flex-col gap6>
  <div v-click text-xl op90>🤦 Rollup, esbuild, tsup, unbuild...</div>
  <div v-click font-bold text-2xl>Why do we need tsdown?</div>
</div>

<!--
- You might be wondering, there are already so many library bundlers out there,
- [click] like Rollup, esbuild, tsup, unbuild, and more.
- [click] So why do we need yet another one, like tsdown?
-->

---
layout: statement
class: text-center
---

# 🤕 Pain Points

<div grid cols-2 gap10 mt-12 mx30>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon:document-configuration text-4xl text-yellow-400 />
    <div text-lg>Complicated Configuration</div>
    <div text-sm op70>Rollup / esbuild configs are complex and error-prone</div>
  </div>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon-idea text-4xl text-blue-400 />
    <div text-lg>Type Declarations</div>
    <div text-sm op70>tsc is hard to integrate, need custom build scripts</div>
  </div>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon-cube text-4xl text-green-400 />
    <div text-lg>Multi-format Output</div>
    <div text-sm op70>ESM / CJS / IIFE configs are inconsistent</div>
  </div>
  <div v-click flex="~ col gap-2 items-center" bg-active rounded-xl p4>
    <div i-carbon-rocket text-4xl text-purple-400 />
    <div text-lg>Performance Bottlenecks</div>
    <div text-sm op70>Slow builds for large libraries</div>
  </div>
</div>

<!--
Actually, publishing a library comes with a lot of pain points.

[click] For example, complicated configuration: tools like Rollup are plugin-based, so you often have to set up a bunch of plugins just to get a complete bundling workflow. Plugins can sometimes conflict with each other. Esbuild and tsup are simpler, but they’re not as feature-rich as Rollup and don’t have its powerful plugin ecosystem.

[click] Type declarations are another headache. We have tsc, but it only converts TypeScript to JavaScript and DTS files one by one. If you need multiple output formats like CJS and ESM, you have to write your own scripts to generate the right type declarations. And if you want to bundle DTS files together, you need even more tools, like api-extractor.

[click] Multi-format output is also a hassle. If you’re using esbuild or Rollup and want to output ESM, CJS, and IIFE, you might need three separate configs, or try to share configs, which is still a pain.

[click] And then there are performance bottlenecks: large projects build slowly. Rollup is written in JavaScript, so it’s naturally slower than tools like esbuild or Rolldown, which are written in Go or Rust.

These issues come up all the time in real development, especially if you build libraries regularly (like I do). Tsdown was created to solve these pain points.
-->

---
class: m20
---

# 🎯 Purpose

Born for modern library development

<div mt-10 text-lg op80>

- Minimal configuration, ready to use out of the box

- Automatic type declarations and dependency analysis

- Consistent multi-format output

- Extreme performance, powered by 🦀 Rust

- Embraces modern frontend development paradigms

</div>

<!--
tsdown’s purpose is very clear: it’s built specifically for modern library development.

- It aims for minimal configuration and works right out of the box.
- It automatically handles type declarations and smart dependency handling, so it knows exactly what to bundle and what to externalize.
- You get multi-format output with a consistent experience, no need to write separate configs for different formats.
- Performance is top-notch, powered by the Rolldown engine written in Rust, which is incredibly fast.
- tsdown also embraces modern development paradigms. The JavaScript ecosystem evolves quickly, what was best practice two years ago might already be outdated today.
-->

---
layout: center
class: text-center
---

# 💁 What Can tsdown Do?

<div grid="~ cols-3 gap8" mt-16>
  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-logos:nodejs-icon-alt text-5xl />
    <div>Node.js / CommonJS
      <div op70 text-sm mt1><code>require('debug')</code></div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-logos:vue text-5xl />
    <div>Vue Components
      <div op70 text-sm mt1><code>App.vue</code></div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-vscode-icons:file-type-typescriptdef rounded text-5xl />
    <div>Type Declarations
      <div op70 text-sm mt1><code>lib.d.ts</code></div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-icon-park-outline:compression text-5xl />
    <div>Minification
      <div op70 text-sm mt1>Minification / Tree-shaking</div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <div i-carbon:cube text-5xl />
    <div>Bundling
      <div op70 text-sm mt1>bundle / bundleless</div>
    </div>
  </div>

  <div flex="~ col items-center gap-2" bg-active rounded-xl p4 v-click>
    <img src="https://unplugin.unjs.io/logo_dark.svg" w-12  />
    <div>Powerful Plugins
      <div op70 text-sm mt1>unplugin / Rollup / Vite</div>
    </div>
  </div>
</div>

<div mt-8 op80 text-2xl v-click>😎 And much more—too many to list!</div>

<!--
So, what exactly can tsdown do?

- [click] It supports CommonJS modules. It can handle code like `require('debug')` and output CJS format, or convert it to ESM for browser use.
- [click] Node.js and browsers don’t recognize .vue files, but tsdown can bundle Vue components.
- [click] It can bundle type declarations into a single DTS file, making distribution and usage much easier.
- [click] It supports code minification and tree-shaking, perfect for libraries that need to stay small for browser use.
- [click] And of course, a bundler bundles! If your library is for the browser, you definitely don’t want users to load a bunch of separate JS files. However, for Node.js, some people prefer not to bundle, so we also support a bundleless mode. You can choose not to bundle if you want.
- [click] Most importantly, tsdown has a powerful plugin system and ecosystem.

[click] There are even more features, but today I’ll just focus on some of the key features.
-->

---
layout: center
class: text-center
---

# 🏄 Progressive Start

<div grid="~ cols-3 gap-8" mt-10 style="--prism-font-size: 1.3em;">
  <div flex="~ col items-center">
    <div text-lg font-bold mb-2>Create a new project</div>

```bash
pnpm create tsdown@latest
```

  </div>
  <div flex="~ col items-center">
    <div text-lg font-bold mb-2>Manual install</div>

```bash
pnpm i -D tsdown
```

  </div>

  <div flex="~ col items-center">
    <div text-lg font-bold mb-2>Bundle with one command</div>

```bash
tsdown
```

  </div>
</div>

<v-clicks mt-8 text-lg text-left op80>

- No config needed, sensible defaults

- Supports npm / pnpm / Yarn / Bun
- Node.js 20.19+; Deno / Bun experimental support
- CLI and config file can be mixed, e.g. `tsdown --no-dts`
- All common options supported, like `--format`, `--watch`

</v-clicks>

<!--
Getting started with tsdown is super easy and straightforward. You can create a new project with a single command, or add it manually to an existing project. Bundling only takes one command just `tsdown`.

- [click] No config needed, sensible defaults cover most use cases.
- [click] Supports npm, pnpm, Yarn, and Bun.
- [click] Works with Node.js 20 and above. Deno and Bun support is experimental.
- [click] You can mix CLI flags and config files. For example, you can use `tsdown --no-dts` to override the `dts` option in your config.
- [click] All the common options are available, like `--format`, `--watch`, and more.
-->

---
class: m20
---

<h1 flex gap2 items-start>
  Type Declaration Generation
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

- No need for tsc, no manual config required
- Performance first
  - Supports `isolatedDeclarations`, powered by {Oxc}
  - Supports TypeScript Go <span op60 ml2>(tsgo.sxzz.dev)</span>
  - Supports multi-project, multi-threaded generation
- Supports {Vue} components

</v-clicks>
</div>

<!--
Type declarations are hard to manage, right?

[click] tsdown has built-in automatic DTS generation, no need for tsc or manual configuration. It just works out of the box, and it’s fast.

[click] It supports tsconfig’s `isolatedDeclarations` mode, powered by Oxc, and also supports TS-Go. So you can still get great performance even without `isolatedDeclarations`. Plus, it offers multi-project and multi-threaded generation, building multiple packages in parallel and taking advantage of all your CPU cores.

[click] And it also has built-in support for Vue SFCs.
-->

---
layout: center
---

<h1 text-center>Dependency Handling</h1>

<div grid="~ cols-2 gap-8" mt-14>
<div flex="~ col items-center gap-2" v-click bg-active rounded-xl p4>
  <div i-carbon-package text-3xl text-blue-400 />
  <div>Auto import/bundle dependencies</div>
  <div text-sm op70><code>dependencies</code>/<code>peerDependencies</code> are externalized by default</div>
</div>
<div flex="~ col items-center gap-2" v-click bg-active rounded-xl p4>
  <div i-carbon-settings text-3xl text-green-400 />
  <div>Flexible control</div>
  <div text-sm op70><code>external</code> / <code>noExternal</code> / <code>inlineOnly</code> for fine-grained config</div>
</div>
</div>

<div v-click />

<!--
tsdown also makes dependency handling much easier:

- [click] It can automatically import or bundle dependencies. By default, `dependencies` and `peerDependencies` are externalized—they won’t be bundled, since users will install them through their own package managers.
- [click] You also have fine-grained control with options like `external` and `noExternal`, so you can decide exactly what to bundle or externalize.
- [click] `devDependencies` are only bundled if they’re actually used—unused ones are left out. There’s also an `inlineOnly` option to help prevent accidentally bundling dependencies. For example, if you accidentally import a phantom or workspace dependency from nowhere, it could get bundled (or “inlined”), which might be huge or unexpected. With `inlineOnly`, you can specify exactly which dependencies you want to inline. Shoutout to Anthony Fu for this idea!
-->

---
layout: center
---

# Multi-format Output & Platform Support

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

<v-clicks style="--prism-font-size: 1.2em;">

- Output multiple formats with one command

  ```bash
  tsdown --format esm,cjs
  ```

- Supports `node / browser / neutral` platforms

- Read `package.json#engines` for syntax lowering (`a?.b` / `a &&= b`)

</v-clicks>

<!--
- [click] Multi-format output and platform support are essential for library development.
- [click] Tsdown can generate multiple formats with just one command.
- [click] It supports node, browser, and neutral platforms for all kinds of scenarios. If your target is the browser but you’ve imported some Node.js built-in modules, tsdown will warn you about those imports.
- [click] tsdown also reads `package.json#engines` for syntax lowering. So if you use modern features like optional chaining or logical assignment, tsdown can automatically convert them to be compatible with older environments—even if your library needs to run on something as old as Node 0.4!
-->

---
grow: center
layout: center
---

# Auto-generate `package.json#exports`

<div w-fit my10 flex gap8 items-center style="--prism-font-size: 1.2em;">
```ts
export default defineConfig({
  exports: true,
})
```
or
```bash
tsdown --exports
```
</div>

<div v-click>

- Automatically generates <code>main/module/types/exports</code> fields in your `package.json`

- Points to source code during development, switches to build output for publishing

- Custom exports rules supported

- Designed to auto-generate `package.json` alongside tsdown config

</div>

<!--
Besides that, tsdown can also automatically generate the `exports` and other fields in your `package.json`:

- [click] It detects and fills in fields like `main`, `module`, `types`, and `exports` for you—no manual setup needed.
- During development, these fields can point to your source code (like the `src` folder), making it easy to work directly with your source. When you publish, they automatically switch to the bundled output (like the `dist` folder).
- And of course, if you have more complex requirements, you can always customize the export rules.
- So the design concept of tsdown is to let package.json be automatically generated along with the configuration of tsdown.
-->

---
layout: center
---

<h1 text-center>Vue Support</h1>

<div style="--prism-font-size: 1.2em;">

```ts
// tsdown.config.ts
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  plugins: [Vue()],
  dts: { vue: true },
  platform: 'neutral',
})
```

</div>

<!--
Building a Vue component library is easy too.

Just add `unplugin-vue` and enable type declarations for Vue.

It supports Vue SFCs, CSS extraction, and type declarations. For cross-platform compatibility, we recommend setting `platform: 'neutral'`, so your library can run on Node for SSR and in browsers for CSR.
-->

---
layout: center
class: text-center
---

# Plugin Ecosystem & Extensibility

<div flex="~ gap-8" mt-16>
  <div v-click flex="~ col items-center gap-2" bg-active p5 rounded-2xl w-40>
    <img src="https://rolldown.rs/rolldown-round.svg" w-20 />
    <div>Rolldown Plugins</div>
  </div>
  <div v-click="1" flex="~ col items-center gap-2" bg-active p5 rounded-2xl w-40>
    <img src="https://unplugin.unjs.io/logo_dark.svg" w-20 />
    <div>Unplugin Plugins</div>
  </div>
  <div v-click="1" flex="~ col items-center gap-2" bg-active p5 rounded-2xl w-40>
    <div i-logos:rollupjs text-20 />
    <div>Rollup Plugins</div>
  </div>
  <div v-click flex="~ col items-center gap-2" p5 op70 rounded-2xl border="~ dashed" w-40>
    <div i-logos:vitejs text-20 />
    <div>Vite Plugins</div>
  </div>
</div>

<!--
On the plugin side,

[click] tsdown supports Rolldown, Unplugin, and Rollup plugins, [click] and is also partially compatible with Vite plugins.

The plugin API is unified, and the ecosystem is extensive. If you’ve used any of these tools before, you’ll feel right at home.
-->

---
class: text-center
---

# Performance

Fast! Really fast!

<img src="/tsdown-benchmark.png" h-90 ma rounded-xl mb3 shadow />

<div flex items-center gap1 justify-center text-sm>
  <ri-github-fill />
  <a op60 href="https://gugustinette.github.io/bundler-benchmark/" font-mono>Gugustinette/bundler-benchmark
  </a>
</div>

<!--
When it comes to performance, tsdown is one of the fastest library bundlers out there. It packs a ton of features without slowing you down.

Here’s a performance comparison chart for tsdown on large libraries. As you can see, it really stands out compared to other tools.
-->

---
layout: center
growOpacity: 0.3
grow: bottom
---

# Migrating from tsup is Super Easy

<div mt12 style="--prism-font-size: 1.5em;">

```bash
tsdown migrate
```

</div>

<div grid="~ cols-2 gap-8" mt-10>
<div flex="~ col items-center gap-2">
  <div i-carbon-migrate text-3xl text-blue-400 />
  <div>Auto-migrate with one command</div>
</div>
<div flex="~ col items-center gap-2">
  <div i-carbon-checkmark text-3xl text-green-400 />
  <div>Highly compatible config</div>
</div>
</div>

<!--
tsdown is now the successor to tsup. If you’ve been using tsup, switching to tsdown is super easy.

Migration is automatic with a single command, and the config is highly compatible. We’ve kept most of tsup’s config options to make the transition smooth, but it’s still a good idea to review your configs after migrating.

We’ve also updated the default values for some options to improve the experience, so be sure to check the migration guide in the docs for more details.
-->

---
layout: center
class: text-center
---

# Feature Overview

<div grid="~ cols-4 gap-x-4 gap-y-7" mt-8 text-sm>

  <div flex="~ col items-center gap-2">
    <div i-carbon-tree-view-alt text-3xl text-green-400 />
    <div>Tree-shaking</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-icon-park-outline:compression text-3xl text-blue-400 />
    <div>Minification</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-map text-3xl text-yellow-400 />
    <div>Source Map</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon:document-view text-3xl text-pink-400 />
    <div>Watch Mode</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-branch text-3xl text-purple-400 />
    <div>Unbundle Mode</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-hugeicons:universal-access-circle text-3xl text-teal-400 />
    <div>Shims</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-report-data text-3xl text-orange-400 />
    <div>Build Report</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-volume-mute text-3xl text-gray-400 />
    <div>Silent Mode</div>
  </div>

  <div flex="~ col items-center gap-2">
    <img src="https://unplugin.unjs.io/logo_dark.svg" w="7.5" />
    <div>Plugin System</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-package text-3xl text-green-400 />
    <div>Auto Dependency Analysis</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-vscode-icons:file-type-typescriptdef text-3xl text-purple-400 />
    <div>Auto Type Declarations</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-code text-3xl text-yellow-400 />
    <div>Multi-entry / Multi-output</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-rocket text-3xl text-orange-400 />
    <div>Rolldown Extreme Performance</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-idea text-3xl text-teal-400 />
    <div>Vite/Vitest Config Reuse</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-migrate text-3xl text-green-400 />
    <div>One-click tsup Migration</div>
  </div>

  <div flex="~ col items-center gap-2">
    <div i-carbon-workspace text-3xl text-blue-400 />
    <div>Monorepo Support</div>
  </div>
</div>

<!--
These are just the tip of the iceberg when it comes to tsdown’s features—there’s a lot more powerful and practical stuff for you to explore!

And the great thing is, all the features Alex mentioned for Rolldown are also available in tsdown!
-->

---
glowX: 100
glowY: 100
class: ml-20 mt-5
---

## tsdown Status

###### As of 2025-10-07

<div flex justify-between my14>
<div grid="~ cols-[auto_1fr] gap-x-4 gap-y-2" items-center>
  <v-clicks :every="2">
    <div text-right text-4xl font-bold color="[#BD3E53]">873K</div><div text-left text-lg op80>NPM downloads / month</div>
    <div text-right text-4xl font-bold color="[#A9BD3E]">2.1K</div><div text-left text-lg op80>Open source <br> downstream projects</div>
    <div text-right text-4xl font-bold color="[#54BD3E]">2.5K</div><div text-left text-lg op80>GitHub Stars</div>
    <div text-right text-4xl font-bold color="[#3EAABD]">52</div><div text-left text-lg op80>Contributors</div>
  </v-clicks>
</div>

<img src="/tsdown-downloads.png" w-110 v-click />
</div>

<!--
Here's the current status of tsdown:

- [click] Monthly NPM downloads have reached eight hundred seventy-three thousand. This month, we became one of the most popular library bundlers in the open source community. Apart from tsup, we've surpassed all other library bundlers. More and more projects are using tsdown, including Vite and Rolldown itself.
- [click] Two thousand one hundred open source projects now depend on tsdown.
- [click] Over two thousand five hundred GitHub stars.
- [click] We also have fifty-two contributors so far.

[click] The chart on the right shows tsdown's download trend. Feel free to give it a try!
-->

---
layout: fact
clicks: 2
---

<div flex items-center gap10 transition-300
  :class="[$clicks === 1 && 'translate-x--210', $clicks === 2 && 'translate-x--430']">
>
  <img w-180 src="/tsdown-twitter1.png"rounded-2xl />
  <img v-click src="/tsdown-twitter2.png"rounded-2xl />
  <img src="/tsdown-twitter3.png"rounded-2xl mt="-70" />
</div>

<!--
Here are some comments about tsdown from Twitter, and as you can see, the feedback is overwhelmingly positive.

Wow tsdown is phenomenal (for no min no)!
-->

---
layout: intro
---

# Next Steps

<h2 mt10>Vite Library Mode Integration</h2>

<v-clicks mt10="!">

- Aligning options with Vite’s library mode (e.g., `logLevel`, `configLoader`)
- CSS support
- Make dts plugin even faster, rewritten in Rust
- Full support for Vite plugins

</v-clicks>

<!--
So, what’s next? We’re going to keep improving tsdown and aim to make it the new lib mode for Vite in the future!

- [click] We’ve already started matching some of Vite’s lib options, like `logLevel` and `configLoader`.
- [click] CSS support is one of the most requested features, so I’ll be looking into how we can provide the best CSS support possible, just after this talk.
- [click] We also want the DTS plugin to be even faster, so we’re planning to rewrite the DTS building logic in Rust.
- [click] tsdown will also have full support for Vite plugins. So in the future, if you’re using Vite, you can just use tsdown directly without needing a separate config.
-->

---
layout: fact
growOpacity: 0.3
---

# Shoulders of Giants

<ul list-none="!" text-center grid cols-2 gap-y-4 text-2xl w-200 ma mt10 mr20>
<li>tsup</li>
<li>unbuild</li>
<li>esbuild</li>
<li>Rollup</li>
<li>unplugin</li>
<li><code>rollup-plugin-dts</code></li>
<li>Rolldown</li>
<li>Oxc</li>
<li>Vite</li>
<li>...</li>
</ul>

<!--
Tsdown’s success is built on the shoulders of giants, it wouldn’t be possible without the foundational work of so many open source projects, including tsup, unbuild, esbuild, Rollup, unplugin, rollup-plugin-dts, Rolldown team, Oxc team, Vite team.

There are so many stories behind all of this that I could talk about them all day!
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
If you’re interested in tsdown, you can check out the code on GitHub, [click] or visit `tsdown.dev`, which has comprehensive documentation.

Everyone is welcome to contribute in any way, whether it’s code, documentation, or feedback!
-->

---
class: text-center
---

# Sponsors

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
Finally, I want to thank all the sponsors for your support! Your encouragement is what keeps me going in open source. Right now, I’m an indie developer funded by open source sponsorships. If you’d like to support my work, you can sponsor me on GitHub. Thank you.
-->

---
layout: intro
class: text-center
growOpacity: 0.7
growSeed: 1
---

<h1 font-smiley scale-120>Thank You</h1>

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
That's all for my talk! I hope you enjoy. Thank you!
-->
