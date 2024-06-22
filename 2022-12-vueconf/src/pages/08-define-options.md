---
layout: cover
---

<div flex justify-between>
  <h1><VueMacrosTitle inline font-mono>defineOptions</VueMacrosTitle></h1>
  <div flex items-center>
    <a href="https://github.com/vuejs/rfcs/discussions/430" target="_blank" font-mono>
      RFC vuejs/rfcs #430
    </a>
  </div>
</div>

<p>
  <span>在一个 SFC 中，避免使用两个 <code>&lt;script&gt;</code> 标签</span>
</p>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {all|1,5-9,11,13}
<script>
// index.vue
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Counter',
  inheritAttrs: false,
})
</script>

<script setup>
const count = ref(0)
</script>
```

  </div>

  <div v-click>➡️</div>

  <div v-after flex="1">

```vue {5-8}
<script setup>
// index.vue
import { ref } from 'vue'

defineOptions({
  name: 'Counter',
  inheritAttrs: false,
})

const count = ref(0)
</script>
```

  </div>
</div>


<!-- 

- 回到刚才话题，内置的宏只提供了 props, emits 和 expose。但还有一些属性像 name 和 inhert attributes 没办法在 `<script setup>` 中设置的。

- *click* 我们只能回到原始的方法，用两个 script 标签来做。我个人不太喜欢这种写法。

- *click* 所以 Vue Macros 提供了第一个宏 `defineOptions` 。可以使用它去定义任何属性。包括上面提到的 name, inhert attributes。甚至也可以写个 render 函数。

- 我向 Vue 社区提了一个 RFC，希望能集成到 Vue core 中，有感兴趣的也欢迎大家到这个 RFC 中讨论。

- 其实一开始，这个插件的目标之一就是尽可能避免使用普通的 `<script>` 标签。

-->
