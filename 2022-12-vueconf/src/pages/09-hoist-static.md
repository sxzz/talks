---
layout: cover
---

<div flex justify-between>
  <h1><VueMacrosTitle inline font-mono>hoistStatic</VueMacrosTitle></h1>
  <div flex items-center>
    <a href="https://github.com/vuejs/rfcs/discussions/430" target="_blank" font-mono>
      PR vuejs/core #5752
    </a>
  </div>
</div>

<p>提升静态常量到顶级作用</p>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {all|5-7|9-11|4}
<script setup>
// index.vue

const componentName = 'Counter'
defineOptions({
  name: componentName,
})

if (someError) {
  console.error(`${componentName} error!`)
}
</script>
```

  </div>

  <div flex="1" relative>

<div v-click w-380px>
```vue {6,8-11}
<script>
// index.vue
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: componentName,
  setup() {
    const componentName = 'Counter'
    if (someError) {
      console.error(`${componentName} error!`)
    }
  }
})
</script>
```
</div>

<div v-click abs-tl w-380px>
```vue {5,8,10-12}
<script>
// index.vue
import { defineComponent, ref } from 'vue'

const componentName = 'Counter'

export default defineComponent({
  name: componentName,
  setup() {
    if (someError) {
      console.error(`${componentName} error!`)
    }
  }
})
</script>
```
</div>


<div v-click abs-tl w-380px>
```vue {5}
<script>
// index.vue
import { defineComponent, ref } from 'vue'

const componentName = /* hoist-static */ fn()

export default defineComponent({
  name: componentName,
  setup() {
    if (someError) {
      console.error(`${componentName} error!`)
    }
  }
})
</script>
```
</div>
  </div>
</div>

<!--
- 我们可能还有一种情况需要普通的 `script` 标签。*click*
- 比如说使用了 defineOptions 定义组件的名称
- *click* 又需要在后面使用组件的名称，比如说报一个错。
- *click* 我们会在最开始声明一个常量储存组件的名字，然后在后面引用它。
- 但是宏会在编译时，会把传递给宏的参数，提升到顶层的属性，顶层是无法使用内部的变量的。所以当然编译器会报错。
- *click* 所以 Vue Macros 提供了这么一个功能 hoistStatic，它会自动把静态常量提升到顶层，也就是一个静态的原始值，比如说字符串、数字、布尔值。因为这些常量定义在哪，其实都没有什么区别的。
- 既然定义在顶层了，那我们的宏也可以正常的使用它了。
- *click* 甚至这里还可以用一个注释强制把非静态的变量提升到顶层。这个就看开发者的需要了，需要自己确保这个函数没有使用到 Composition API 的钩子。
-->
