<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <button class="rounded-full p-2 btn" @click="dec()">
      <div class="i-carbon-subtract" />
    </button>
    <div class="font-mono w-15 mx-auto inline-block">
      {{ count }}
    </div>
    <button class="rounded-full p-2 btn" @click="inc()">
      <div class="i-carbon-add" />
    </button>
  </div>
</template>

