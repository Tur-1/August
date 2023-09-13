<template>
  <div class="col-xl-6 col-lg-6 col-md-6 product-deatil-information">
    <div class="product-detail-info">
      <Brand
        :brand="{
          name: productStore.product.brand_name,
          image: productStore.product.brand_image,
        }"
      />
      <Title :name="productStore.product.name" />
      <Price :product="productStore.product" />
      <QualityInfo />
    </div>

    <div>
      <ProductSizeOptions :sizeOptions="productStore.sizeOptions" />

      <div class="add-product-warp" v-if="productStore.product.in_stock">
        <AddToCartButton />
        <AddToWshlistButton />
      </div>

      <div class="add-product-warp" v-if="!productStore.product.in_stock">
        <span style="border-radius: 5px" class="out-of-stock-bg w-100 p-2">
          out of stock
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Brand,
  Title,
  Price,
  QualityInfo,
  ProductSizeOptions,
  AddToCartButton,
  AddToWshlistButton,
} from "@/pages/ProductDetailPage/components";

import { useProductStore } from "@/pages/ProductDetailPage/stores";

const productStore = useProductStore();
</script>
