<script setup>
import { ref, watch, onMounted } from "vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import ShopPageDesktop from "@/pages/ShopPage/views/desktop/ShopPageDesktop.vue";
import ShopPageMobile from "@/pages/ShopPage/views/mobile/ShopPageMobile.vue";
import { useRoute, useRouter } from "vue-router";
import { FilterStore } from "@/pages/ShopPage/stores";
import { getRouteQueryString } from "@/pages/ShopPage/helpers";
import { isDesktop, isMobile } from "@/helpers";

const route = useRoute();
const router = useRouter();
const { getCategory, getProducts } = useShopPageService();

onMounted(async () => {
  await getCategory(route.params.categoryUrl),
    await getProducts({
      query: route.query,
      category_url: route.params.categoryUrl,
    }),
    getRouteQueryString(route.query);
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
