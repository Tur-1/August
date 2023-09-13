<template>
  <div class="mb-3" v-for="banner in HomePageStore.mediumBanners">
    <a href="#"><img :src="banner.image_url" class="w-100" alt="..." /></a>
  </div>
</template>
<script setup>
import HomePageStore from "@/pages/HomePage/store/HomePageStore";
</script>
