<template>
  <ul class="shop-page-sidebar-categories">
    <li
      class="shop-page-sidebar-category-item"
      v-for="(category, index) in categories"
      :key="index"
    >
      <Link :to="{ name: 'shop', params: { categoryUrl: category.url } }">
        <i class="bi bi-caret-right-fill"></i>
        {{ category.name }}
      </Link>
    </li>
  </ul>
</template>
<script setup>
import useCategoriesStore from "@/pages/ShopPage/stores/CategoriesStore";
import { computed } from "vue";

const CategoriesStore = useCategoriesStore();

const categories = computed(() =>
  CategoriesStore.categoryChildren.length != 0
    ? CategoriesStore.categoryChildren
    : CategoriesStore.parentChildren
);
</script>
