<script setup>
import ProductDetailSkeleton from "@/pages/ProductDetailPage/views/ProductDetailSkeleton.vue";
import useProductPageService from "@/pages/ProductDetailPage/services/useProductPageService";
import BaseBreadcrumb from "@/components/BaseBreadcrumb/index.vue";
import { isDesktop, skeletonLoading } from "@/helpers";
import { onMounted } from "vue";
import { useProductStore } from "@/pages/ProductDetailPage/stores";
import {
  ProductImages,
  ProductDetailTabs,
  ProductInformation,
  BreadcrumbItem,
  RelatedProducts,
} from "@/pages/ProductDetailPage/components";
import useRouterStore from "@/router/RouterStore";
const routerStore = useRouterStore();

const productStore = useProductStore();
const { getProductDetail, getRelatedProducts, getProductReviews } =
  useProductPageService();

onMounted(async () => {
  await getProductDetail();
  Promise.all([
    getRelatedProducts(),
    getProductReviews(productStore.product.id),
  ]);
});
</script>

<template>
  <section v-if="!skeletonLoading.isLoading">
    <BaseBreadcrumb :activePage="productStore.product.name" v-if="isDesktop">
      <BreadcrumbItem />
    </BaseBreadcrumb>
    <div class="container product-detail-container">
      <div class="row justify-content-center">
        <ProductImages />

        <ProductInformation />
      </div>
      <div class="related-products-tabs">
        <ProductDetailTabs />
        <RelatedProducts />
      </div>
    </div>
  </section>

  <ProductDetailSkeleton v-if="skeletonLoading.isLoading" />
</template>
