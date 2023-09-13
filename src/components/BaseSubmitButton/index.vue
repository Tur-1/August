<script setup>
const props = defineProps(["onProgress", "title", "class"]);
</script>
<template>
  <button
    type="submit"
    class="btn btn-primary app-submit-button"
    :class="class"
  >
    <span :class="{ 'me-3': onProgress }">{{ title }}</span>

    <div
      class="spinner-border spinner-border-sm opacity-0"
      role="status"
      :class="{ 'opacity-100': onProgress }"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </button>
</template>
<style scoped>
.app-submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
