<template>
  <div class="mb-3 mt-2 border-bottom">
    <div class="d-flex justify-content-center">
      <h3 class="text-uppercase">Wishlist</h3>
    </div>
    <div class="text-center">
      <p class="text-uppercase">{{ wishlistStore.counter }} items</p>
    </div>
  </div>
</template>
<script setup>
import { useWishlistStore } from "@/pages/WishlistPage/stores";
const wishlistStore = useWishlistStore();
</script>
