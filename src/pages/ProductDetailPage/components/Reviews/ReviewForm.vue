<template>
  <form
    class="review-form d-flex flex-column"
    @submit.prevent="sendComment(route.params.productSlug, review)"
  >
    <div class="mb-3 d-flex flex-row align-items-start">
      <img
        src="@/assets/images/avatars/avatar_male.png"
        alt=""
        width="40"
        class="rounded-circle"
      />
      <div class="form-floating w-100">
        <textarea
          class="form-control form-control-sm w-100"
          :class="{ 'is-invalid': review.errors !== null }"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          v-model="review.comment"
          style="resize: none; margin-left: 6px"
        ></textarea
        ><label for="floatingTextarea">Comment</label>
      </div>
    </div>
    <div class="ms-5 d-flex flex-column">
      <span class="text-danger" v-for="error in review.errors"
        >{{ error }}
      </span>
    </div>
    <button type="submit" class="btn btn-primary btn-sm">submit</button>
  </form>
</template>
<script setup>
import useProductPageService from "@/pages/ProductDetailPage/services/useProductPageService";

import { useRoute } from "vue-router";

const { sendComment, review } = useProductPageService();
const route = useRoute();
</script>
