<template>
  <div class="checkout-product-details-col">
    <span class="discounted-price" v-show="item.product.discount">
      {{ item.product.discount?.price_before + " SAR" }}
    </span>
    <span class="price">{{ item.product.price }} SAR</span>
  </div>
</template>

<script setup>
defineProps(["item"]);
</script>
