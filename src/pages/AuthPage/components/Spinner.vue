<template>
  <div
    class="spinner-border spinner-border-sm opacity-0"
    role="status"
    :class="{ 'opacity-100': onProgress }"
  >
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script setup>
defineProps(["onProgress"]);
</script>

<style scoped></style>
