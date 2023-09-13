<template>
  <div class="cart-item-actions">
    <a
      role="button"
      class="remove-btn"
      @click="removeCartItem({ item_id: item.id, index: index })"
    >
      <i class="bi bi-trash me-1" />
      Remove
    </a>

    <a
      role="button"
      class="save-btn"
      @click="
        moveToWishlist({
          product_id: item.product.id,
          cart_item_id: item.id,
          index: index,
        })
      "
    >
      <i class="bi bi-heart me-1" />
      Move to wishlist
    </a>
  </div>
</template>

<script setup>
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";

const props = defineProps(["item", "index"]);

const { removeCartItem, moveToWishlist } = useShoppingCartService();
</script>
