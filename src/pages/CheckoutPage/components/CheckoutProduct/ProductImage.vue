<template>
  <Link
    class="checkout-product-image"
    :to="{
      name: 'productDetail',
      params: { productSlug: item.product.slug },
    }"
  >
    <img :src="item.product.main_image_url" class="img-fluid" />
  </Link>
</template>

<script setup>
defineProps(["item"]);
</script>
