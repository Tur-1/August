<script setup>
import { useRoute } from "vue-router";
import {
  Categories,
  FilterProducts,
  SortProducts,
} from "@/pages/ShopPage/components/mobile";
import ProductCard from "@/components/ProductCard/index.vue";
import MobilePagination from "@/components/MobilePagination/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import useProductsStore from "@/pages/ShopPage/stores/ProductsStore";

const { getProducts } = useShopPageService();
const ProductsStore = useProductsStore();

const route = useRoute();
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
          @onPageChange="(url) => getProducts({ url: url, query: route.query })"
        />
      </div>
    </div>
  </section>
</template>
