<template>
  <div class="mobile-header-categories-warp">
    <div class="mobile-categories-row mb-1">
      <CategoryCard
        :active="
          CategoriesStore.categoryChildren?.length != 0 &&
          CategoriesStore.category.url == useRoute().params.category_url
        "
        :category_url="
          CategoriesStore.categoryChildren?.length != 0
            ? CategoriesStore.category.url
            : CategoriesStore.parentCategory.url
        "
        :name="'All'"
        v-if="!skeletonLoading.isLoading"
      />
      <template v-if="CategoriesStore.categoryChildren.length != 0">
        <CategoryCard
          v-for="category in CategoriesStore.categoryChildren"
          :active="category.url == useRoute().params.category_url"
          :category_url="category.url"
          :name="category.name"
          v-if="!skeletonLoading.isLoading"
        />
      </template>
      <template v-if="CategoriesStore.parentChildren.length != 0">
        <CategoryCard
          v-for="category in CategoriesStore.parentChildren"
          :active="category.url == useRoute().params.category_url"
          :category_url="category.url"
          :name="category.name"
          v-if="!skeletonLoading.isLoading"
        />
      </template>
      <CategoryCardSkeleton v-if="skeletonLoading.isLoading" />
    </div>
  </div>
</template>

<script setup>
import CategoryCardSkeleton from "@/pages/CategoryPage/components/mobile/Categories/CategoryCardSkeleton.vue";
import CategoryCard from "@/pages/CategoryPage/components/mobile/Categories/CategoryCard.vue";
import useCategoriesStore from "@/pages/CategoryPage/stores/CategoriesStore";
import { useRoute } from "vue-router";
import { skeletonLoading } from "@/helpers";

const CategoriesStore = useCategoriesStore();
</script>
