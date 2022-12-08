---
layout: cover
title: <VueMacrosTitle inline font-mono>betterDefine</VueMacrosTitle>
---

# <VueMacrosTitle inline font-mono>betterDefine</VueMacrosTitle>

<span>
issue
<a href="https://github.com/vuejs/core/issues/4294" target="_blank" font-mono>vuejs/core #4294</a>
</span>

<p class="!opacity-80 !leading-7">
支持在 <code>&lt;script setup&gt;</code> 导入 TS 类型来定义 props 和 emits
<br/> Vue 官方的支持会在 3.3 发布
</p>

<div flex="~ gap-6 wrap">

<div w-min v-click>

交集 <span text-sm text-gray>Intersections</span>

```vue
<script setup lang="ts">
import { FooProps } from './types'

defineProps<FooProps & {
  title?: string
}>()
</script>
```

</div>


<div w-min v-click>

继承 <span text-sm text-gray>Extends</span>

```vue
<script setup lang="ts">
import { FooProps } from './types'

interface Props extends FooProps {
  title?: string
}

defineProps<Props>()
</script>
```

</div>

<div w-min v-click>

`defineEmits`

```vue
<script setup lang="ts">
import { FooEmits } from './types'

interface Emits extends FooEmits {
  (evt: 'change', val: string): void
}

defineEmits<Emits>()
</script>
```

</div>

</div>

<!--
- 接下来这个就比较有用了。之前提到在 setup 中可以用 TS 来定义 props 和 emits，但目前还是不太好用。有一个限制：类型定义必须在 Vue SFC 中声明，不能使用 import 来导入。因为 Vue 编译器目前只关注于来自 `.vue` 后缀文件的内容。

- 在 Vue Macros 中实现了一个比较基础的 TS 解析器。它会分析导入进来的 TS 类型。但目前还不支持非常复杂的类型，比如说类型体操。但绝大多数的场景应该是够用了。
- *click* 它能支持纯引用，也支持交集、类型别名、*click* 继承和深层嵌套等基本使用。*click* 当然 `defineEmits` 也是支持的。除了类型体操外，几乎是和在 TS 文件使用的体验差不多了。
- Vue core 仓库目前是有一个 issue，也有蛮多人反馈了。目前也有其他的实现，各位也可以翻到最新的一条评论，可以尝试一下不同的实现
- 我个人可能在 Vue 团队中推动它在 Vue 3.3 落地实现
-->
