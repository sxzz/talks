---
layout: cover
---

<div h-full flex="~ col">

# <VueTitle inline font-mono>Vue 2</VueTitle> 中使用 <VueMacrosTitle inline font-mono>defineModel</VueMacrosTitle>

<p class="!opacity-80 !leading-7">
统一模式下会自动把 prop 和 event 的名称转换成 Vue 2 的规则。
</p>

<div font-mono>
&nbsp;prop: <code>modelValue</code> ➡️ <code>value</code> <br/>
event: <code>update:modelValue</code> ➡️ <code>input</code>
</div>

✨ 同样的代码，都可以运行在 Vue 2 和 3 中！

</div>

<!-- 

- 对于 Vue 2，defineModel 提供了一个 unified mode，也就是统一模式。在声明的时候，还是可以用 Vue 3 的写法。比如说 props 叫做 `modelValue`，event 叫做 `update:modelValue`。但在编译的时候，插件会自动帮你转换它成 Vue 2 默认的，也就是 `value`  属性 和 `input` 事件。

- 这样的好处是，可以写一个通用的组件。只用写一次，再分别交给 Vue 2 和 Vue 3 的编译器去处理，最后编译后的结果是不一样的。然后都是可以分别跑在 Vue 2 和 Vue 3 使用的。

-->
