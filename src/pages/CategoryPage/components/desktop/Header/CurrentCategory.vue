<template>
  <div class="col-lg-2 col-md-2">
    <span class="current-category" v-if="skeletonLoading.item !== 'sidebar'">
      {{ CategoriesStore.category.name }}
    </span>
    <span
      class="current-category placeholder-wave"
      v-if="skeletonLoading.item == 'sidebar'"
    >
      <span class="placeholder rounded-1 w-50"></span>
    </span>
  </div>
</template>

<script setup>
import { skeletonLoading } from "@/helpers";
import useCategoriesStore from "@/pages/CategoryPage/stores/CategoriesStore";

const CategoriesStore = useCategoriesStore();
</script>
