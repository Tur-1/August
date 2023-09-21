<template>
  <div class="sort-by-area" v-if="skeletonLoading.item !== 'sidebar'">
    <div class="sort-by-wrap" @click="showSortDropdown">
      <div class="sort-by">
        <span><i class="bi bi-funnel"></i> Sort by: {{ activeSort }} </span>
      </div>
      <div class="sort-by">
        <span><i class="bi bi-chevron-down"></i></span>
      </div>
    </div>
    <ul class="sort-by-dropdown" v-show="isOpen">
      <li v-for="(sort, index) in SortProductsStore.list" :key="sort.id">
        <a
          role="button"
          @click="
            sortPorudtcs({
              slug: sort.slug,
            }),
              showSortDropdown()
          "
          :class="{
            active: ProductsFilterStore.sort == sort.slug,
          }"
        >
          <i :class="sort.icon"></i> {{ sort.name }}</a
        >
      </li>
    </ul>
  </div>

  <SortProductsSkeleton v-if="skeletonLoading.item == 'sidebar'" />
</template>
<script setup>
import SortProductsStore from "@/pages/ShopPage/stores/SortProductsStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
import useSortProductsService from "@/pages/ShopPage/services/useSortProductsService";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { SortProductsSkeleton } from "@/pages/ShopPage/components/desktop";
import { skeletonLoading } from "@/helpers";

const { sortPorudtcs, showSortDropdown, activeSort, getActiveSort, isOpen } =
  useSortProductsService();
const route = useRoute();

onMounted(() => getActiveSort(route.query.sort));
</script>
