<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(banner, index) in HomePageStore.largeBanners"
        class="carousel-item w-100 h-100"
        :class="{ active: index == 0 }"
      >
        <Link :to="banner.link">
          <img :src="banner.image_url" class="d-block w-100 h-100" alt="..." />
        </Link>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import HomePageStore from "@/pages/HomePage/store/HomePageStore";
</script>
