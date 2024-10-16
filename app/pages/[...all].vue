<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="flex items-center justify-center p-4 text-center text-teal-700 dark:text-gray-200">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button class="text-sm btn mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>

