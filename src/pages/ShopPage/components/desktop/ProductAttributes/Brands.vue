<template>
  <div class="list-group">
    <label class="base-checkbox-warp" v-for="(brand, index) in BrandsStore.brands" :key="index">
      <div class="d-flex align-items-center">
        <div class="base-checkbox-input">
          <input class="form-check-input" type="checkbox" name="brand[]" :id="'brand-' + brand.id" :value="brand.slug"
            v-model="FilterStore.brand" />
        </div>
        <span class="me-2">{{ brand.name }}</span>
      </div>

      <span> ({{ brand.products_count }})</span>
    </label>
  </div>
</template>
<script setup>
import { useBrandsStore, FilterStore } from "@/pages/ShopPage/stores";

const BrandsStore = useBrandsStore();
</script>
