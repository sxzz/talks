---
layout: cover
---

<div flex justify-between>
  <h1><VueMacrosTitle inline font-mono>namedTemplate</VueMacrosTitle></h1>
  <div flex items-center>
    <a href="https://github.com/vuejs/core/discussions/6898" target="_blank" font-mono>
      vuejs/core #6898
    </a>
  </div>
</div>

<p class="!opacity-80">
定义子模板，可在主模板中引用子模板的内容
</p>

<div relative>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {2,6-8,12-14}
<script setup>
const pager = 'top'
</script>

<template>
  <template v-if="pager === 'top'">
    <span>This is pager</span>
  </template>

  <span>Here is data table</span>

  <template v-if="pager === 'bottom'">
    <span>This is pager</span>
  </template>
</template>
```

  </div>

  <div v-click>➡️</div>

  <div v-after flex="1">

```vue {5-8,9-12,16-19}
<script setup>
const pager = 'top'
</script>

<template name="pager">
  <span>This is pager</span>
</template>

<template>
  <template v-if="pager === 'top'">
    <template is="pager" />
  </template>

  <span>Here is data table</span>

  <template v-if="pager === 'bottom'">
    <template is="pager" />
  </template>
</template>
```

  </div>

</div>

<div v-click abs-tl w-full bg='#121212'>

```vue
<script setup>
const direction = 'top'
</script>

<template name="tab-header">
  <span>Tab header</span> <!-- ..... -->
</template>

<template name="tab-body">
  <span>Tab body</span> <!-- ..... -->
</template>

<template>
  <template v-if="direction === 'top'">
    <template is="tab-header" /> <template is="tab-body" />
  </template>
  <template v-else>
    <template is="tab-body" /> <template is="tab-header" />
  </template>
</template>
```

</div>

</div>

<!--
- OK 接下来，我们在使用模板的时候，可能会遇到需要重复使用的一小部分元素。

- 比如说一个分页器，需要控制它在哪显示，这种情况一般会把他抽成一个新组件，但其实如果足够简单的话，似乎又没用太大的必要，亦或者或干脆使用 JSX。
- 为了弥补模板的局限性，Vue Macros 有一个非常实验性的功能 namedTemplate
- *click* 可以在一个 SFC 中写多个 template，并为其命名。在主 template 通过 template is 来引用这个子模板。
- *click* 再比如一个比较常见的场景是对掉元素，比如说一个 Tabs 选项卡组件。
- 可能选项卡显示在顶部，或者底部。那么需要控制这 选项卡和内容 这两个组件的位置。如果又不想写重复的代码。那么用这个特性也是比较合适的。
- 值得说明的是，这些模板是共享一个作用域，也就是共享同一个 script 块的。
- 这个功能也是在 Vue 社区的讨论中受启发的一个功能。
- 功能本身其实很难去定义 是不是一个好的功能，这个就见仁见智了。如果你有这个需求就可以去用。当然如果不喜欢也是 OK 的。
- 也欢迎反馈更多的意见和建议
-->
