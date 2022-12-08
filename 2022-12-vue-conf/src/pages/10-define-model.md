---
layout: cover
---

# <VueMacrosTitle inline font-mono>defineModel</VueMacrosTitle>

<p class="!opacity-80">
简化重复的 props 和 emits 声明，由 <logos-vueuse /> <a href="https://vueuse.org/" target="_blank">VueUse</a> 驱动。
</p>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {all|2-5|7-10|12-13|all}
<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  count: number
}>()

const emit = defineEmits<{
  (evt: 'update:modelValue', value: string): void
  (evt: 'update:count', value: number): void
}>()

emit('update:modelValue', 'newValue')
emit('update:count', props.count + 1)
</script>
```

  </div>

  <div v-click>➡️</div>

  <div v-after flex="1">
```vue
<script setup lang="ts">
const { modelValue, count } = defineModel<{
  modelValue: string
  count: number
}>()

modelValue.value = 'newValue'
count.value++
</script>
```

  </div>
</div>

<!--
- 下一个宏，`defineModel` 就是一个语法糖了。

- 在 Vue 中定义一个双向绑定的值，需要写好几行代码。需要去定义 **click** props, **click** emits。**click** 和调用 emit 函数改变它的值。

- *double click* 有了 defineModel，就可以省略这些重复的定义。

- 还可以当正常的一个 ref 去使用。这部分运行时的功能使用到了 VueUse，所以使用前也需要装 VueUse。能少写几行重复的声明。
-->
