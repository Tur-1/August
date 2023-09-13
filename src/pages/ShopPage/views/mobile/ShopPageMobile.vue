<script setup>
import { useRoute } from "vue-router";
import { Products } from "@/pages/ShopPage/components/desktop";
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
        <Products />
        <MobilePagination
          :pagination="ProductsStore.pagination"
          @onPageChange="
            async (url) =>
              await getProducts({
                url: url,
                query: route.query,
                category_url: route.params.categoryUrl,
              })
          "
          v-if="ProductsStore.count !== 0"
        />
      </div>
    </div>
  </section>
</template>
