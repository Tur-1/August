<template>
  <div class="categories-page-header">
    <button
      v-for="(section, index) in CategoriesPageStore.sections"
      :key="section.id"
      class="section-tab"
      @click="Tab.openSectionTab(section.id)"
      :class="{
        active: Tab.id == section.id || (index == 0 && Tab.id == 0),
      }"
      type="button"
    >
      {{ section.name }}
    </button>
  </div>
</template>
<script setup>
import Tab from "../store/Tab";
import CategoriesPageStore from "../store/CategoriesPageStore";
</script>
