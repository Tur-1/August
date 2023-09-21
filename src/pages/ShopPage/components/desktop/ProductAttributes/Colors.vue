<template>
  <div class="list-group" id="colors-list">
    <label
      class="base-checkbox-warp"
      v-for="(color, index) in ColorsStore.colors"
      :key="index"
    >
      <div class="d-flex align-items-center">
        <img :src="color.image_url" width="15" height="15" alt="Black" />
        <span class="ms-2">{{ color.name }} </span>
        <span class="ms-2">({{ color.products_count }})</span>
      </div>
      <div class="base-checkbox-input">
        <input
          class="form-check-input"
          type="checkbox"
          name="color[]"
          :id="'color-' + color.id"
          :value="color.slug"
          v-model="ProductsFilterStore.color"
        />
      </div>
    </label>
  </div>
</template>
<script setup>
import useColorsStore from "@/pages/ShopPage/stores/ColorsStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
const ColorsStore = useColorsStore();
</script>
