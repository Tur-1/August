<template>
  <div class="review">
    <div class="review-user-image me-3">
      <img
        :src="review.user.gender == 'Male' ? maleAvatar : femaleAvatar"
        alt=""
        width="40"
        class="rounded-circle"
      />
    </div>
    <div class="d-flex flex-column w-100">
      <div class="d-flex flex-row justify-content-between text-center">
        <span class="d-block font-weight-bold">{{ review.user.name }}</span
        ><span class="date text-sm">{{ review.date }}</span>
      </div>
      <div class="mt-2 text-wrap">
        <p class="comment-text text-break">{{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import maleAvatar from "@/assets/images/avatars/avatar_male.png";
import femaleAvatar from "@/assets/images/avatars/avatar_female.png";

const props = defineProps({
  review: Object,
});
</script>
