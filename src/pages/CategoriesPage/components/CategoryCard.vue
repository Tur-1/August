<template>
  <Link
    class="card-category"
    :to="{
      name: 'category_page',
      params: {
        category_url: `${category_url}`,
      },
      meta: {
        title: name,
      },
    }"
  >
    <img loading="lazy" :src="imageUrl ?? defultCardImage" />

    <span> {{ name }} </span>
  </Link>
</template>

<script setup>
import defultCardImage from "@/assets/images/defult-card-image.png";

const props = defineProps({
  name: String,
  category_url: String,
  imageUrl: String,
});
</script>
