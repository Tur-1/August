<script setup>
import { useRoute } from "vue-router";
import {
  Categories,
  FilterProducts,
  SortProducts,
} from "@/pages/CategoryPage/components/mobile";
import ProductCard from "@/components/ProductCard/index.vue";
import MobilePagination from "@/components/MobilePagination/index.vue";
import useCategoryPageService from "@/pages/CategoryPage/services/useCategoryPageService";
import useProductsStore from "@/pages/CategoryPage/stores/ProductsStore";

const { getProducts } = useCategoryPageService();
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
        <ProductCard
          :products="ProductsStore.products"
          :showNoProductsFound="true"
        />

        <MobilePagination
          :prevPage="ProductsStore.pagination.prevPage"
          :nextPage="ProductsStore.pagination.nextPage"
          :currentPage="ProductsStore.pagination.meta.current_page"
          @onPageChange="(url) => getProducts({ url: url, query: route.query })"
        />
      </div>
    </div>
  </section>
</template>
