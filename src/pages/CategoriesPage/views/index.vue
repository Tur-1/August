<template>
  <section v-if="!skeletonLoading.isLoading">
    <CategoriesHeader />
    <CategoriesBody />
  </section>
  <section v-if="skeletonLoading.isLoading">
    <CategoriesSkeleton />
  </section>
</template>

<script setup>
import CategoriesHeader from "@/pages/CategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/pages/CategoriesPage/components/CategoriesBody.vue";
import CategoriesSkeleton from "@/pages/CategoriesPage/components/CategoriesSkeleton.vue";
import useCategoriesPageService from "@/pages/CategoriesPage/services/useCategoriesPageService";
import { onMounted } from "vue";
import { skeletonLoading } from "@/helpers";

const { getAllCategories } = useCategoriesPageService();

onMounted(getAllCategories);
</script>
