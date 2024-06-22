# `<script setup>`

Vue 3.2 引入了 `<script setup>` 语法


<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {all|4-5,7-12}
<script>
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const msg = ref('')

    return {
      msg,
    }
  }
})
</script>

<template>
  <span>{{ msg }}</span>
</template>
```

  </div>

  <div v-click>➡️</div>

  <div v-after flex="1">

```vue
<script setup>
import { ref } from 'vue'

const msg = ref('')
</script>

<template>
  <span>{{ msg }}</span>
</template>
```

  </div>
</div>



<!--
- 首先，我们需要回顾一下在 Vue 3.2 中新增的功能 `<script setup>` 语法

- *click*

- 在 Vue 3.2 之前，我们写一个 Composition API 的组件，需要在一个普通的 script 标签中，默认导出一个组件。

- 在组件里面我们要写 setup 属性。这几乎就是每次创建组件前一个固定不变的写法。

- 每次定义了一个新的变量，还要记得把它从 setup 函数返回出去，其实是一件蛮累的事情

- *click*

- 在 Vue 3.2 之后，Vue 的编译器会帮你去做这件事情了。我们就可以省去好几行固定写法的代码。

- 但 Vue 编译器就只能做这么简单的工作吗？显然不仅仅只有这些。
-->
