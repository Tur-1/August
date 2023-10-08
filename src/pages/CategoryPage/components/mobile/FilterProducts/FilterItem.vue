<script setup>
import { MainOffcanvas, useMainOffcanvas } from "@/components/Offcanvas";

import SelectedAttributes from "@/pages/CategoryPage/components/mobile/FilterProducts/SelectedAttributes.vue";

const props = defineProps({
  title: String,
  FilteredItems: [String, Array],
  offcanvasId: String,
});

const emits = defineEmits(["onClose", "removeQuery"]);

const close = () => {
  emits("onClose");
};
</script>
<template>
  <div class="filter-item">
    <button
      class="filter-item-name"
      type="button"
      @click="useMainOffcanvas.open(offcanvasId)"
    >
      <strong class="text-capitalize">{{ title }}</strong>
      <i class="bi bi-chevron-right fa-lg"></i>
    </button>

    <SelectedAttributes
      :items="props.FilteredItems"
      @removeQuery="(item) => $emit('removeQuery', item)"
    />
  </div>
  <MainOffcanvas
    :borderRadius="'11px'"
    height="100%"
    position="absolute"
    :standalone="false"
    :id="offcanvasId"
    :title="title"
    @onClose="close"
  >
    <template #body>
      <slot />
    </template>
  </MainOffcanvas>
</template>
