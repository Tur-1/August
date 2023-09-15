<script setup>
import ProductCard from "@/components/ProductCard/index.vue";

import {
  Categories,
  FilterProducts,
  SortProducts,
} from "@/pages/ShopPage/components/mobile";
import MobilePagination from "@/components/MobilePagination/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { useProductsStore } from "@/pages/ShopPage/stores";

const { getProducts } = useShopPageService();
const ProductsStore = useProductsStore();
</script>

<template>
  <section class="shop-page-mobile-section">
    <div class="mobile-shop-page-header">
      <SortProducts />

      <FilterProducts />
    </div>
    <Categories />
    <div class="container">
      <div class="row">
        <ProductCard :products="ProductsStore.products" />

        <MobilePagination
          :pagination="ProductsStore.pagination"
          @onPageChange="getProducts"
          v-if="ProductsStore.count !== 0"
        />
      </div>
    </div>
  </section>
</template>
