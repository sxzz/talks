---
layout: cover
---

# <VueMacrosTitle inline font-mono>betterDefine</VueMacrosTitle>

<p class="!opacity-80 !leading-7">
Support imported types in <code>&lt;script setup&gt;</code> type-based macros.
<br/>Official support is expected in Vue 3.3.
</p>

<div flex="~ gap-6 wrap">

<div w-min>

Intersections

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

Extends

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
