<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const url = 'https://vvv-api.sxzz.moe'
const votesLabel = {
  a: '没听过',
  b: '听说过',
  c: '使用过',
  d: '参与开发过',
}

const analysisResult = ref({
  a: 0,
  b: 0,
  c: 0,
  d: 0,
})

const fetchResult = () => {
  fetch(`${url}/vote-analysis`)
    .then((res) => res.json())
    .then((res) => {
      if (!Object.keys(res).length) return
      Object.assign(
        analysisResult.value,
        {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
        },
        res,
      )
    })
    .catch((error) => {
      console.error(error)
    })
}
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(fetchResult, 3000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section
    class="h-[58vh] w-[58vh] flex items-center justify-center overflow-hidden"
    style="box-shadow: #000000 0 0 20px inset"
  >
    <section
      class="wrapper relative overflow-hidden"
      style="box-shadow: #000000 0 0 40px 80px inset"
    >
      <section class="wrapper absolute z-[-1] flex">
        <section
          v-for="i in 4"
          :key="i"
          style="border-bottom: none !important"
          class="h-full w-full"
          border="~ 1px dashed gray"
        />
      </section>
      <section class="wrapper absolute z-[-1] flex flex-col">
        <section
          v-for="i in 4"
          :key="i"
          class="h-full w-full"
          border="~ 1px dashed gray"
        />
      </section>
      <section class="cell absolute left-[15vh] top-[15vh] z-1">
        <div>{{ votesLabel.a }}</div>
        <div class="cell-data">{{ analysisResult.a }}</div>
      </section>
      <section class="cell absolute left-[30vh] top-[15vh] z-1">
        <div>{{ votesLabel.b }}</div>
        <div class="cell-data">{{ analysisResult.b }}</div>
      </section>
      <section class="cell absolute left-[15vh] top-[30vh] z-1">
        <div>{{ votesLabel.c }}</div>
        <div class="cell-data">{{ analysisResult.c }}</div>
      </section>
      <section class="cell absolute left-[30vh] top-[30vh] z-1">
        <div>{{ votesLabel.d }}</div>
        <div class="cell-data">{{ analysisResult.d }}</div>
      </section>
    </section>
  </section>
</template>

<style scoped>
.wrapper {
  height: 60vh;
  width: 60vh;
}

.cell {
  height: 15vh;
  width: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  --at-apply: 'font-semibold';
}

.cell-data {
  margin-top: 8px;
  font-size: 32px;
  --at-apply: 'font-mono font-bold';
}
</style>
