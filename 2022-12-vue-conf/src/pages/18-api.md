---
layout: cover
---

# 计划 `@vue-macros/api`

公开的核心 API

- 分析 SFC 组件的基本信息
- 对 props、emits 等进行增删改查
- 目前只支持用宏 + TS 类型声明

## 🚧 WIP

- 运行时定义 / Runtime
- expose / name / `inheritAttrs`
- 代码转换
- ...

<!-- 
目前也有在计划，完善 Vue Macros 的公开的核心 API

- 它可以对 SFC 进行分析，分析后 props, emits 等进行增删改查等操作
- 也就是说 api 集成了对宏和 TS 的分析和代码生成

- betterDefine 其实只是基于它的一个副产物，基本上没几行代码，核心都在 api 中

- 目前的话，只支持用宏 + TS 类型声明的定义方式，还不支持分析运行时的定义，也就是开发者直接用 Object 或 Array 来声明 props 和 emits。
- 后续也会支持更多的宏，比如说 expose，其他的 name 和 inherit attributes 等属性的分析。也会支持对其他代码的转换
-->
