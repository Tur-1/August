<template>
  <div class="swipe-cart-item-actions">
    <button
      class="swipe-cart-item-action save-btn"
      @click="
        moveToWishlist({
          product_id: item.product.id,
          cart_item_id: item.id,
          index: index,
        })
      "
    >
      <i class="bi bi-heart"></i>
      <small> move to wishlist</small>
    </button>
    <button
      class="swipe-cart-item-action remove-btn"
      type="button"
      @click="removeCartItem({ item_id: item.id, index: index })"
    >
      <i class="bi bi-trash"></i>
      <small>Remove</small>
    </button>
  </div>
</template>

<script setup>
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";

const props = defineProps(["item", "index"]);
const { removeCartItem, moveToWishlist } = useShoppingCartService();
</script>
