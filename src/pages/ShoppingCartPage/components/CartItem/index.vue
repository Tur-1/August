<script setup>
import { isDesktop, isMobile } from "@/helpers";
import { CartStore } from "@/pages/ShoppingCartPage/stores";
import {
  touchstart,
  touchend,
} from "@/pages/ShoppingCartPage/helpers/swipeCartItem";
import {
  CartItemImage,
  CartItemActions,
  CartItemSwipeActions,
  CartProductDetails,
  CartItemSkeleton,
  CartItemQuantity,
  CartItemPrice,
} from "@/pages/ShoppingCartPage/components";
</script>
<template>
  <transition-group
    name="list"
    tag="div"
    class="mb-4 col-lg-7"
    v-show="!CartStore.isLoading"
  >
    <div
      v-for="(item, index) in CartStore.items"
      :key="item.id"
      class="shopping-cart-item"
    >
      <div
        class="cart-item"
        @touchstart="touchstart($event, `cart-item-${item.id}`)"
        @touchmove="touchend($event, `cart-item-${item.id}`)"
        :id="`cart-item-${item.id}`"
      >
        <span class="out-of-stock" v-if="!item.in_stock"> out of stock </span>
        <CartItemImage :item="item" />
        <div class="cart-item-details">
          <div class="cart-item-details-col">
            <CartProductDetails :item="item" />
            <div class="d-flex align-items-baseline">
              <CartItemQuantity :item="item" />
              <CartItemActions v-if="isDesktop" :item="item" :index="index" />
            </div>
          </div>

          <CartItemPrice :item="item" />
        </div>
      </div>
      <CartItemSwipeActions v-if="isMobile" :item="item" :index="index" />
    </div>
  </transition-group>

  <CartItemSkeleton />
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
