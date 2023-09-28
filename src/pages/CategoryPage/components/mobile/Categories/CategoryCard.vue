<template>
  <div class="category-swiper-slide">
    <Link
      class="category-link"
      :class="{
        'active-category-link': active,
      }"
      :to="{
        name: 'category_page',
        params: {
          category_url: `${category_url}`,
        },
      }"
    >
      {{ name }}
    </Link>
  </div>
</template>

<script setup>
const props = defineProps(["active", "categories", "category_url", "name"]);
</script>
