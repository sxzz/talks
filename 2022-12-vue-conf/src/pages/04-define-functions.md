# 如何定义组件的属性？

<span v-click>使用 `defineProps`, `defineEmits`, `defineExpose` 等宏</span>

<div flex="~ gap-8">

<div v-after flex-auto>
```vue
<script setup>
// 这里是 setup 代码
defineProps(['title', 'count'])
const emit = defineEmits(['change'])

emit('change', 'new value')
</script>
```
</div>

<div v-click flex-auto>
```js
const __sfc__ = {
  props: ["title", "count"],
  emits: ["change"],

  setup(__props, { emit }) {
    // 这里是 setup 代码
    emit("change", "new value");

    return {};
  },
};
export default __sfc__;
```
</div>

</div>

<!--
- 在这里其实还有个问题，那我们要如何设置像 props、emits 之类的属性呢？

- *click*

- 在 Vue 3.2 之后，提供了几个 API，`defineProps`, `defineEmits`, `defineExpose` 之类的。这些其实就是宏。是不需要导入就可以用的。

- *click* 我们来看看编译后的结果

- 我们可以看到在编译后，*回到屏幕* 这些宏的代码会自动移动到外层，也就是和 setup 方法同级别的那层。

- 换句话说，它会转换成原来 Vue 3.2 之前写组件的形式，也就是 props、emits 之类的属性
-->
