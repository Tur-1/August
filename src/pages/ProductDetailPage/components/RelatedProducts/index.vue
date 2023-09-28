<template>
  <div class="related-products horizontal-section">
    <h5 class="section-title"><span>Related</span> Products</h5>
    <div class="base-slider">
      <ProductCard
        :products="productStore.relatedProducts"
        class="col-xl-3 col-lg-3 col-md-4 col-5 mb-4"
      />
    </div>
  </div>
</template>
<script setup>
import ProductCard from "@/components/ProductCard/index.vue";
import { useProductStore } from "@/pages/ProductDetailPage/stores";

const productStore = useProductStore();
</script>
