<template>
  <template v-if="!skeletonLoading.isLoading">
    <Card
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      :class="props.class"
      @addToWishList="addToWishList({ product_id: product.id, index: index })"
    />
  </template>

  <CardSkeleton v-if="skeletonLoading.isLoading" :class="props.class" />

  <NoProductsFound
    v-if="
      products.length <= 0 &&
      !skeletonLoading.isLoading &&
      props.showNoProductsFound
    "
  />
</template>

<script setup>
import useWishlistService from "@/pages/WishlistPage/services/useWishlistService";
import CardSkeleton from "@/components/ProductCard/CardSkeleton.vue";
import NoProductsFound from "@/components/ProductCard/NoProductsFound.vue";

import Card from "@/components/ProductCard/Card.vue";
import { skeletonLoading } from "@/helpers";

const props = defineProps({
  class: {
    type: String,
    default: "col-xl-3 col-lg-4 col-md-4 col-6",
  },
  products: Object,
  showNoProductsFound: {
    default: false,
    type: Boolean,
  },
});
const { addProductToWishlist } = useWishlistService();

const addToWishList = async ({ product_id, index }) => {
  let product = props.products.find((ele) => ele.id == product_id);
  product.inWishlist = await addProductToWishlist({
    product_id: product_id,
    index: index,
  });
};
</script>
