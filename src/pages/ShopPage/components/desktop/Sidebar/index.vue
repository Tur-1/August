<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
import {
  Categories,
  SidebarSkeleton,
  Brands,
  Colors,
  SizeOptions,
} from "@/pages/ShopPage/components/desktop";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { skeletonLoading } from "@/helpers";

const { getProducts } = useShopPageService();
const route = useRoute();

watch(
  () => route.query,
  async (value) => {
    await getProducts({
      query: value,
    });
  },
  { deep: true }
);
</script>
<template>
  <div class="shop-page-sidebar" v-if="!skeletonLoading.isLoading">
    <Categories />
    <label class="fw-700 mb-3 sidebar-border-top" for="brands-list">
      Brand
    </label>

    <Brands />
    <label class="fw-700 mb-3 sidebar-border-top" for="colors-list">
      Color
    </label>
    <Colors />
    <label class="fw-700 mb-3 sidebar-border-top" for="sizes-list">Size</label>
    <SizeOptions />
  </div>

  <SidebarSkeleton v-if="skeletonLoading.isLoading" />
</template>
