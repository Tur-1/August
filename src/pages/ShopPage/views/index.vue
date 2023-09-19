<script setup>
import { watch, onMounted } from "vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { useRoute, useRouter } from "vue-router";
import { FilterStore } from "@/pages/ShopPage/stores";
import { getRouteQueryString } from "@/pages/ShopPage/helpers";
import { isDesktop, isMobile } from "@/helpers";

import { defineAsyncComponent } from "vue";

const ShopPageDesktop = defineAsyncComponent(() =>
  import("@/pages/ShopPage/views/desktop/ShopPageDesktop.vue")
);
const ShopPageMobile = defineAsyncComponent(() =>
  import("@/pages/ShopPage/views/mobile/ShopPageMobile.vue")
);
const route = useRoute();
const router = useRouter();
const { getCategory, getProducts } = useShopPageService();

onMounted(() => {
  getRouteQueryString(route.query);
  Promise.all([getProducts({ query: route.query }), getCategory()]);
});

watch(
  () => FilterStore,
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
  <ShopPageDesktop v-if="isDesktop" />
  <ShopPageMobile v-if="isMobile" />
</template>
