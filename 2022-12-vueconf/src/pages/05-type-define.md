# 使用 TypeScript 定义

TypeScript 类型声明来定义 props 和 emits

<div flex="~ gap-8">

<div flex-auto>
```vue
<script setup lang="ts">
defineProps<{
  foo?: string
}>()
const emit = defineEmits<{
  (evt: 'change', value: string): void
}>()

emit('change', 'new value')
</script>
```
</div>

<div v-click flex-auto>
```js
const __sfc__ = {
  props: {
    foo: { type: String, required: false },
  },
  emits: ["change"],
  setup(__props, { emit }) {
    emit("change", "new value");

    return {};
  },
};

export default __sfc__;
```
</div>

</div>

<!--
- 使用宏来定义还有个好处，就是可以通过 TypeScript 来定义 props 和 emits。

- *click* 比起运行时的写法，就比较方便了，而且类型也会比运行时定义更严格。

- 比如说，在调用 emit 函数时，如果事件是 change，那么他的参数是有类型提示的。

- OK 总之。在 Vue 中，宏其实就是在编译阶段，给编译器看的一个 API。并不会在实际运行的时候执行。
-->
