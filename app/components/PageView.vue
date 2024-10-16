<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>
<!-- mude todo o unocss para o tailwind -->
<template>
  <div class="text-gray-300">
    <span class="text-gray-500 font-medium">{{ data?.pageview }}</span>
    page views since
    <span class="text-gray-500">{{ time }}</span>
  </div>
</template>

