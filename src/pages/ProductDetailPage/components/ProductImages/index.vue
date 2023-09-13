<template>
  <div class="col-xl-4 col-lg-4 col-md-6">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(image, index) in productStore.images"
          :key="image"
          :class="{ active: index == 0 }"
        >
          <img :src="image.image_url" class="d-block w-100" alt="..." />
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
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from "@/pages/ProductDetailPage/stores";

const productStore = useProductStore();
</script>
