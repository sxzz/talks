<h1>谁在使用 <img src="/logo2.svg" w-3em inline /> ？</h1>

<div flex="~ col gap-20">

<div v-click flex="~ gap-5" items-center>
  <div flex="~ col gap-2" items-center w-30>
    <div i-ep:element-plus text="#409EFF" h-12 w-12 />
    <a href="https://element-plus.org/" target="_blank">Element Plus</a>
  </div>

`defineOptions` / `hoistStatic`
</div>

<div v-click flex="~ gap-5" items-center>
  <div flex="~ col gap-2" items-center w-30>
    <img src="/elk.svg"  w-12 />
    <a href="https://element-plus.org/" target="_blank">Elk 鹿鸣</a>
  </div>

  <div flex="~ col gap-3">
    
    `defineOptions` / `defineModel` / `defineSlots`

  <div flex="~ gap2">
    <div i-logos:nuxt-icon w-6 h-6 />
    Nuxt 3 一行配置，开箱即用
  </div>

  </div>
</div>

</div>

<!--
那目前有哪些项目已经使用了 Vue Macros 呢？

- *click* 其实这个插件一开始只有 `defineOptions` 一个功能，是特地为 Element Plus 做的一个插件。

- 也是在开发 Element Plus 的时候，要把普通的 script 标签，迁移到 Vue 3.2 的 script setup 语法。
- 在做迁移的时候，就遇到了几个问题，因为作为一个组件库，需要去定义每个组件的名称，带上一个前缀。Vue 编译器只会使用文件名作为默认的组件名称。所以就需要手动去设置 name 属性。也就有了 defineOptions 这个宏。
- 接着就遇到刚才讲到的 hoistStatic 提升静态常量，后面的需要引用组件的名称，所以后面也就有了第二个功能，后面越做越多，就改名成 Vue Macros 了。
- 迁移到 script setup 语法还有个问题，在 Element Plus 中会把 props 和 emits 放在一个普通的 TS 文件中，并导出。那就遇到了刚刚讲到 betterDefine 的问题了，没有 betterDefine 的话编译器会报错，所以现在算是把迁移到 setup 语法的坑都铺平了。
- 接着，就是我和 Anthony Fu、Vite 团队的 Matias，就是那个猫猫头像的，以及 Nuxt 团队的 Daniel 一起开发的 Elk 鹿鸣，一个用 Nuxt 3 开发的一个叫做长毛象的社交平台的客户端。
- 其中就用到了 defineOptions, defineModel 等功能。所以它对 Nuxt 3 的支持也比较好，提供了 Nuxt module 模块。基本上只要 npm 安装一下，然后添加上这个模块，一行代码，就可以用了。Elk 项目可能会在近期开源，可以敬请期待一下。
- 总体来说，大部分的功能已经稳定了。具体功能的稳定性有也在文档上标注。对于非 stable 的 feature 个人建议还是不要在正式的项目中使用了。
- 可能还有部分比较小的点没有介绍到，大家也可以去参阅文档了解。

-->
