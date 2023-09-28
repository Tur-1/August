<script setup>
import { skeletonLoading } from "@/helpers";
import BannersSkeleton from "@/pages/HomePage/components/BannersSkeleton.vue";
import LargeBanners from "@/pages/HomePage/components/LargeBanners.vue";
import LatestProducts from "@/pages/HomePage/components/LatestProducts.vue";
import MediumBanners from "@/pages/HomePage/components/MediumBanners.vue";
import useHomePageService from "@/pages/HomePage/services/useHomePageService";
import { onMounted } from "vue";

const { getLatestProducts, getBanners } = useHomePageService();
onMounted(() => {
  Promise.all([getLatestProducts(), getBanners()]);
});
</script>
<template>
  <section class="container">
    <div class="home-large-banners">
      <LargeBanners v-if="!skeletonLoading.isLoading" />

      <BannersSkeleton v-if="skeletonLoading.isLoading" />
    </div>
    <div class="home-medium-banners">
      <MediumBanners v-if="!skeletonLoading.isLoading" />

      <BannersSkeleton v-for="i in 3" v-if="skeletonLoading.isLoading" />
    </div>

    <LatestProducts />
  </section>
</template>
