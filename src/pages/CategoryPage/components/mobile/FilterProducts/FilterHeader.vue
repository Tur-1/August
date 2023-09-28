<template>
  <div class="mobile-filter-header">
    <span class="title">Filter</span>
    <button type="button" class="clear-filter-btn" @click="$emit('clearAll')">
      clear All
    </button>
  </div>
</template>

<script setup>
const emits = defineEmits(["clearAll"]);
</script>
