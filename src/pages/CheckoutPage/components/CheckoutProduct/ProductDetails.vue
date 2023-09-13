<template>
  <div class="checkout-product-details-col">
    <Link
      class="brand-name"
      :to="{
        name: 'productDetail',
        params: { productSlug: item.product.slug },
      }"
    >
      {{ item.product.brand_name }}
    </Link>
    <span class="description">{{ item.product.name }}</span>
    <span class="size"> size: {{ item.size.name }}</span>
    <span class="checkout-product-qty"> Quantity: {{ item.quantity }} </span>
  </div>
</template>

<script setup>
defineProps(["item"]);
</script>
