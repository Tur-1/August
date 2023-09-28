<template>
  <div class="categories-page-body">
    <div
      v-for="(section, sectionIndex) in CategoriesPageStore.sections"
      :key="section.id"
      class="section-content"
      :class="{
        active_section_content:
          Tab.id == section.id || (sectionIndex == 0 && Tab.id == 0),
      }"
    >
      <div class="categories-sidebar">
        <button
          v-for="(category, categoryIndex) in section.children"
          :key="category.id"
          type="button"
          @click="Tab.openCategoryContent(category.id)"
          :class="{
            active:
              category.id == Tab.categoryId || categoryIndex == Tab.categoryId,
          }"
        >
          {{ category.name }}
        </button>
      </div>
      <div
        class="categories-content"
        v-for="(category, categoryIndex) in section.children"
        :key="category.id"
        :class="{
          content_active:
            category.id == Tab.categoryId || categoryIndex == Tab.categoryId,
        }"
      >
        <CategoryCard
          name="view all"
          :category_url="category.url"
          :imageUrl="category.image_url"
        />
        <CategoryCard
          v-for="(subcategory, subcategoryIndex) in category.children"
          :key="subcategory.id"
          :name="subcategory.name"
          :category_url="subcategory.url"
          :imageUrl="subcategory.image_url"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Tab from "../store/Tab";
import CategoriesPageStore from "../store/CategoriesPageStore";
import CategoryCard from "@/pages/CategoriesPage/components/CategoryCard.vue";
</script>
