<template>
  <div class="text-start mt-2">
    <p class="text-uppercase">{{ wishlistStore.counter }} items</p>
  </div>
</template>
<script setup>
import { useWishlistStore } from "@/pages/WishlistPage/stores";
const wishlistStore = useWishlistStore();
</script>
