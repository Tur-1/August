<template>
  <!-- <section v-if="!skeletonLoading.isLoading">
    <CategoriesHeader />
    <CategoriesBody />
  </section>
  <section v-if="skeletonLoading.isLoading">
    <CategoriesSkeleton />
  </section> -->
  <section>
    <div class="categories-page-header">
      <button class="section-tab active" type="button">Men</button>
    </div>
    <div class="categories-page-body">
      <div class="section-content active_section_content">
        <div class="categories-sidebar">
          <button type="button" class="active">Clothing</button
          ><button type="button" class="">Accessories</button
          ><button type="button" class="">Shoes</button
          ><button type="button" class="">Bags</button>
        </div>
        <div class="categories-content content_active">
          <a href="/categories/men-clothing" class="card-category"
            ><img
              loading="lazy"
              src="/src/assets/images/defult-card-image.png"
            /><span>view all</span></a
          ><a
            href="/categories/men-clothing-hoodies_sweatshirts"
            class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695103824-1673102412-screenshot_2022_08_13_104807.webp"
            /><span>Hoodies &amp; Sweatshirts</span></a
          ><a
            href="/categories/men-clothing-t_shirt_visits"
            class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695103937-1673103163-screenshot_2021_10_14_145605.webp"
            /><span>T-Shirt &amp; Visits</span></a
          ><a href="/categories/men-clothing-pants_chinos" class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695104240-1673103212-screenshot_2021_10_14_145839.webp"
            /><span>Pants &amp; Chinos</span></a
          ><a href="/categories/men-clothing-jeans" class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695104289-1-we545b-desktop-list.png"
            /><span>Jeans</span></a
          >
        </div>
        <div class="categories-content">
          <a href="/categories/men-accessories" class="card-category"
            ><img
              loading="lazy"
              src="/src/assets/images/defult-card-image.png"
            /><span>view all</span></a
          ><a
            href="/categories/men-accessories-sunglasses"
            class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695111183-1-web-desktop-listdfd.png"
            /><span>Sunglasses</span></a
          >
        </div>
        <div class="categories-content">
          <a href="/categories/men-shoes" class="card-category"
            ><img
              loading="lazy"
              src="/src/assets/images/defult-card-image.png"
            /><span>view all</span></a
          ><a href="/categories/men-shoes-sneakers" class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695104715-1-w56eb-desktop-list.png"
            /><span>Sneakers</span></a
          ><a href="/categories/men-shoes-sports_shoes" class="card-category"
            ><img
              loading="lazy"
              src="/categories/1695104767-1-web-de65sktop-list.png"
            /><span>Sports Shoes</span></a
          >
        </div>
        <div class="categories-content">
          <a href="/categories/men-bags" class="card-category"
            ><img
              loading="lazy"
              src="/src/assets/images/defult-card-image.png"
            /><span>view all</span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CategoriesHeader from "@/pages/CategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/pages/CategoriesPage/components/CategoriesBody.vue";
import CategoriesSkeleton from "@/pages/CategoriesPage/components/CategoriesSkeleton.vue";
import useCategoriesPageService from "@/pages/CategoriesPage/services/useCategoriesPageService";
import { onMounted } from "vue";
import { skeletonLoading } from "@/helpers";

// const { getAllCategories } = useCategoriesPageService();

// onMounted(getAllCategories);
</script>
