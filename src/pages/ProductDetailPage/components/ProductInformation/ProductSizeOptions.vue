<template>
  <div class="attr-size">
    <strong class="me-3">Size</strong>
    <ul class="size-filter">
      <li v-for="(size, index) in productStore.sizeOptions" :key="index">
        <input
          type="radio"
          name="size"
          :value="size.id"
          class="btn-check"
          :id="'size-' + size.id"
          @change="
            productStore.selectSize({
              size_id: size.id,
              product_id: productStore.product.id,
            })
          "
        />

        <label class="btn" :for="'size-' + size.id">{{ size.name }}</label>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useProductStore } from "@/pages/ProductDetailPage/stores";

const productStore = useProductStore();
</script>
