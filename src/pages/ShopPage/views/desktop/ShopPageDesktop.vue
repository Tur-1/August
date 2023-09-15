<script setup>
import { Header, Sidebar } from "@/pages/ShopPage/components/desktop";
import Pagination from "@/components/Pagination/index.vue";
import { useProductsStore } from "@/pages/ShopPage/stores";
import ProductCard from "@/components/ProductCard/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";

const { getProducts } = useShopPageService();

const ProductsStore = useProductsStore();
</script>
<template>
  <section class="container">
    <Header />
    <div class="row">
      <div class="col-lg-2 col-md-3">
        <Sidebar />
      </div>
      <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
        <div class="row">
          <ProductCard :products="ProductsStore.products" />
        </div>
        <div class="d-flex justify-content-center">
          <Pagination
            v-if="ProductsStore.count !== 0"
            :links="ProductsStore.pagination.links"
            @onPageChange="getProducts"
          />
        </div>
      </div>
    </div>
  </section>
</template>
