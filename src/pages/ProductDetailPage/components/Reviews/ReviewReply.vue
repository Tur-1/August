<template>
  <div class="review-reply">
    <i class="bi bi-arrow-return-right me-3"></i>
    <div class="review-user-image me-2">
      <img
        :src="reply.admin.gender == 'Male' ? maleAvatar : femaleAvatar"
        alt=""
        width="40"
        class="rounded-circle"
      />
    </div>
    <div class="d-flex flex-column w-100">
      <div class="d-flex flex-row justify-content-between text-center">
        <span class="d-block font-weight-bold">{{ reply.admin.name }}</span
        ><span class="date text-sm">{{ reply.date }}</span>
      </div>
      <div class="mt-2 text-wrap">
        <p class="comment-text text-break">{{ reply.comment }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import maleAvatar from "@/assets/images/avatars/avatar_male.png";
import femaleAvatar from "@/assets/images/avatars/avatar_female.png";

const props = defineProps({
  reply: Object,
});
</script>
