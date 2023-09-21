<template>
  <div class="list-group" id="brands-list">
    <label
      class="base-checkbox-warp"
      v-for="(brand, index) in BrandsStore.brands"
      :key="index"
      :for="`brand-${brand.id}`"
    >
      <div class="d-flex align-items-center">
        <div class="base-checkbox-input">
          <input
            class="form-check-input"
            type="checkbox"
            name="brand[]"
            :id="'brand-' + brand.id"
            :value="brand.slug"
            v-model="ProductsFilterStore.brand"
          />
        </div>
        <span class="me-2">{{ brand.name }}</span>
      </div>

      <span> ({{ brand.products_count }})</span>
    </label>
  </div>
</template>
<script setup>
import useBrandsStore from "@/pages/ShopPage/stores/BrandsStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";

const BrandsStore = useBrandsStore();
</script>
