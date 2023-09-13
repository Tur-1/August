<template>
  <div class="cart-item-quantity">
    <button
      :disabled="item.quantity == 1"
      class="quantity-btn rounded-start"
      type="button"
      id="button-addon1"
      @click="decrementItemQuantity(item.id)"
    >
      <i class="bi bi-dash"></i>
    </button>
    <small class="quantity-value">{{ item.quantity }} </small>
    <button
      class="quantity-btn rounded-end"
      type="button"
      id="button-addon1"
      :disabled="item.quantity >= item.size.stock"
      @click="incrementItemQuantity(item.id)"
    >
      <i class="bi bi-plus"></i>
    </button>
  </div>
</template>

<script setup>
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";

defineProps(["item"]);

const { incrementItemQuantity, decrementItemQuantity } =
  useShoppingCartService();
</script>
