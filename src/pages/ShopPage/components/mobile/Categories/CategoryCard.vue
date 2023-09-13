<template>
  <div class="category-swiper-slide">
    <Link
      class="category-link"
      :class="{
        'active-category-link': active,
      }"
      :to="{
        name: 'shop',
        params: {
          categoryUrl: `${categoryUrl}`,
        },
      }"
    >
      {{ name }}
    </Link>
  </div>
</template>

<script setup>
const props = defineProps(["active", "categories", "categoryUrl", "name"]);
</script>
