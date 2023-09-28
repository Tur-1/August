<template>
  <ol
    class="breadcrumb"
    id="shop-desktop-breadcrumb"
    v-if="skeletonLoading.item !== 'sidebar'"
  >
    <li class="breadcrumb-item">
      <Link to="/"> Home </Link>
    </li>

    <li
      class="breadcrumb-item"
      v-for="(parent, index) in CategoryStore.parentsCategory"
      :key="parent.id"
    >
      <i class="bi bi-chevron-right"></i>
      <Link
        :to="{ name: 'category_page', params: { category_url: parent.url } }"
      >
        {{ parent.name }}
      </Link>
    </li>

    <li class="breadcrumb-item" aria-current="page" style="font-weight: 600">
      <i class="bi bi-chevron-right"></i>
      {{ CategoryStore.category.name }}
    </li>
  </ol>

  <BreadcrumbSkeleton v-if="skeletonLoading.item == 'sidebar'" />
</template>
<script setup>
import useCategoriesStore from "@/pages/CategoryPage/stores/CategoriesStore";
import BreadcrumbSkeleton from "@/pages/CategoryPage/components/desktop/Header/BreadcrumbSkeleton.vue";
import { skeletonLoading } from "@/helpers";

const CategoryStore = useCategoriesStore();
</script>
