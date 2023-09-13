<script setup>
import { Header, Sidebar } from "@/pages/ShopPage/components/desktop";
import Pagination from "@/components/Pagination/index.vue";
import { useProductsStore } from "@/pages/ShopPage/stores";
import { useRoute } from "vue-router";
import { Products } from "@/pages/ShopPage/components/desktop";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";

const { getProducts } = useShopPageService();
const route = useRoute();

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
          <Products />
        </div>
        <div class="d-flex justify-content-center">
          <Pagination
            v-if="ProductsStore.count !== 0"
            :links="ProductsStore.pagination.links"
            @onPageChange="
              async (url) =>
                await getProducts({
                  url: url,
                  query: route.query,
                  category_url: route.params.categoryUrl,
                })
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>
