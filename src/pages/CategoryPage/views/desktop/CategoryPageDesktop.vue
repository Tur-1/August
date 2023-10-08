<script setup>
import { Header, Sidebar } from "@/pages/CategoryPage/components/desktop";
import Pagination from "@/components/Pagination/index.vue";
import useProductsStore from "@/pages/CategoryPage/stores/ProductsStore";
import ProductCard from "@/components/ProductCard/index.vue";
import useCategoryPageService from "@/pages/CategoryPage/services/useCategoryPageService";
import { useRoute } from "vue-router";

const { getProducts } = useCategoryPageService();

const ProductsStore = useProductsStore();

const route = useRoute();
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
          <ProductCard
            :products="ProductsStore.products"
            :showNoProductsFound="true"
          />
        </div>
        <div class="d-flex justify-content-center">
          <Pagination
            :links="ProductsStore.pagination.links"
            @onPageChange="
              (url) => getProducts({ url: url, query: route.query })
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>
