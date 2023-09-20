<template>
  <div class="product-detail-brand">
    <h4 class="title-detail">{{ brand.name }}</h4>
    <img v-if="brand.image" :src="brand.image" :alt="brand.name" width="60" />
  </div>
</template>
<script setup>
defineProps(["brand"]);
</script>
