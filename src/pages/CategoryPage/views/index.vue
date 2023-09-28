<script setup>
import { watch, onMounted } from "vue";
import useCategoryPageService from "@/pages/CategoryPage/services/useCategoryPageService";
import { useRoute, useRouter } from "vue-router";
import ProductsFilterStore from "@/pages/CategoryPage/stores/ProductsFilterStore";
import getRouteQueryString from "@/pages/CategoryPage/helpers/getRouteQueryString";
import { isDesktop, isMobile } from "@/helpers";
import { defineAsyncComponent } from "vue";

const CategoryPageDesktop = defineAsyncComponent(() =>
  import("@/pages/CategoryPage/views/desktop/CategoryPageDesktop.vue")
);
const CategoryPageMobile = defineAsyncComponent(() =>
  import("@/pages/CategoryPage/views/mobile/CategoryPageMobile.vue")
);
const route = useRoute();
const router = useRouter();
const { getCategory, getProducts, getColors } = useCategoryPageService();

onMounted(() => {
  getRouteQueryString(route.query);
  Promise.all([
    getColors(),
    getProducts({ query: route.query }),
    getCategory(),
  ]);
});

watch(
  () => ProductsFilterStore,
  (value) => {
    router.push({
      query: {
        color: value.color,
        brand: value.brand,
        size: value.size,
        sort: value.sort,
      },
    });
  },
  { deep: true }
);
</script>
<template>
  <CategoryPageDesktop v-if="isDesktop" />
  <CategoryPageMobile v-if="isMobile" />
</template>
