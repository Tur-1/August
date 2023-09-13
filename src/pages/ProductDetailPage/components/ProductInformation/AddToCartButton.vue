<template>
  <div class="cart-btn-wrraper">
    <button class="btn btn-primary cart-btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script setup>
import useProductPageService from "@/pages/ProductDetailPage/services/useProductPageService";

const { addToCart } = useProductPageService();
</script>
