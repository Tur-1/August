<template>
  <div class="list-group" id="sizes-list">
    <label
      class="base-checkbox-warp"
      v-for="(size, index) in SizesStore.sizes"
      :key="index"
    >
      <div class="d-flex align-items-center">
        <div class="base-checkbox-input">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'size-' + size.id"
            :value="size.slug"
            v-model="ProductsFilterStore.size"
          />
        </div>
        <span class="me-2">{{ size.name }} </span>
      </div>

      <span> ({{ size.products_count }})</span>
    </label>
  </div>
</template>
<script setup>
import useSizesStore from "@/pages/CategoryPage/stores/SizesStore";
import ProductsFilterStore from "@/pages/CategoryPage/stores/ProductsFilterStore";
const SizesStore = useSizesStore();
</script>
