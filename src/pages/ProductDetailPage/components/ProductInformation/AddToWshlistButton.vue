<template>
  <div class="wishlist-btn-wrraper">
    <button
      class="add-wishlist-btn"
      @click="addToWishList(productStore.product.id)"
      :class="{
        'product-in-wishlist': productStore.product.inWishlist,
      }"
    >
      <i class="bi bi-heart"></i>
    </button>
  </div>
</template>
<script setup>
import { useProductStore } from "@/pages/ProductDetailPage/stores";

import useWishlistService from "@/pages/WishlistPage/services/useWishlistService";

const { addProductToWishlist } = useWishlistService();

const productStore = useProductStore();
const addToWishList = async (product_id) => {
  productStore.product.inWishlist = await addProductToWishlist({
    product_id: product_id,
  });
};
</script>
