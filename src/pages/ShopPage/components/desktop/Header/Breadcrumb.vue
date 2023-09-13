<template>
  <ol class="breadcrumb" id="shop-desktop-breadcrumb" v-if="!skeletonLoading.isLoading">
    <li class="breadcrumb-item">
      <Link to="/"> Home </Link>
    </li>

    <li class="breadcrumb-item" v-for="(parent, index) in CategoryStore.parentsCategory" :key="parent.id">
      <i class="bi bi-chevron-right"></i>
      <Link :to="{ name: 'shop', params: { categoryUrl: parent.url } }">
      {{ parent.name }}
      </Link>
    </li>

    <li class="breadcrumb-item" aria-current="page" style="font-weight: 600">
      <i class="bi bi-chevron-right"></i>
      {{ CategoryStore.category.name }}
    </li>
  </ol>

  <BreadcrumbSkeleton v-if="skeletonLoading.isLoading" />
</template>
<script setup>
import useCategoriesStore from "@/pages/ShopPage/stores/CategoriesStore";
import BreadcrumbSkeleton from "@/pages/ShopPage/components/desktop/Header/BreadcrumbSkeleton.vue";
import { skeletonLoading } from "@/helpers";

const CategoryStore = useCategoriesStore();
</script>
