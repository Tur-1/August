<script setup>
import Review from "@/pages/ProductDetailPage/components/Reviews/Review.vue";
import ReviewReply from "@/pages/ProductDetailPage/components/Reviews/ReviewReply.vue";

import { useReviewsStore } from "@/pages/ProductDetailPage/stores";

const reviewsStore = useReviewsStore();
</script>
<template>
  <div class="reviews-list">
    <div class="review-item" v-for="review in reviewsStore.reviews">
      <Review :review="review" />
      <ReviewReply :reply="review.reply" v-if="review.reply" />
    </div>
  </div>
</template>
