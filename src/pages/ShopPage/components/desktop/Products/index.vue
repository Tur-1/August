<template>
  <ProductCard :products="ProductsStore.products" />
</template>

<script setup>
import ProductCard from "@/components/ProductCard/index.vue";
import { useProductsStore } from "@/pages/ShopPage/stores";

const ProductsStore = useProductsStore();
</script>
