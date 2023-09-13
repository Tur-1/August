<template>
  <template v-if="!skeletonLoading.isLoading">
    <div
      v-for="(item, index) in CheckoutStore.products"
      :key="item.id"
      class="checkout-product"
      :id="`cart-item-${item.id}`"
    >
      <span class="out-of-stock" v-if="!item.in_stock"> out of stock </span>
      <ProductImage :item="item" />
      <div class="checkout-product-details">
        <ProductDetails :item="item" />

        <ProductPrice :item="item" />
      </div>
    </div>
  </template>
  <ProductSkeleton v-if="skeletonLoading.isLoading" />
</template>

<script setup>
import { useCheckoutStore } from "@/pages/CheckoutPage/stores";
import {
  ProductImage,
  ProductDetails,
  ProductPrice,
  ProductSkeleton,
} from "@/pages/CheckoutPage/components";
import { skeletonLoading } from "@/helpers";

const CheckoutStore = useCheckoutStore();
</script>
