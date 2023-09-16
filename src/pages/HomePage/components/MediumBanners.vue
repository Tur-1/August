<template>
  <div class="mb-3" v-for="banner in homePageStore.mediumBanners">
    <a href="#"><img :src="banner.image_url" class="w-100" alt="..." /></a>
  </div>
</template>
<script setup>
import useHomePageStore from "@/pages/HomePage/store/HomePageStore";

const homePageStore = useHomePageStore();
</script>
