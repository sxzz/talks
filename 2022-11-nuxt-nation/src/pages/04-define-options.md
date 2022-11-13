---
layout: cover
title: <VueMacrosTitle inline font-mono>defineOptions</VueMacrosTitle>
---

# <VueMacrosTitle inline font-mono>defineOptions</VueMacrosTitle>

<p class="!opacity-80">

Avoiding two `<script>` tags in the one SFC. [RFC](https://github.com/vuejs/rfcs/discussions/430)

</p>

<div w-full flex="~ row gap-5" items-center>
  <div flex="1">

```vue {all|5-8}
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

