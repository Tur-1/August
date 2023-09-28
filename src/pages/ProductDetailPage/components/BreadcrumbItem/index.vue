<template>
  <div
    v-for="(category, index) in productStore.categories"
    :key="index"
    class="breadcrumb-item"
  >
    <Link
      :to="{ name: 'category_page', params: { category_url: category.url } }"
    >
      {{ category.name }}</Link
    >
    <i class="bi bi-chevron-right"></i>
  </div>
</template>
<script setup>
import { useProductStore } from "@/pages/ProductDetailPage/stores";

const productStore = useProductStore();
</script>
