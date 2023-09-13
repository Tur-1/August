<template>
  <div class="tab-content shop_info_tab entry-main-content">
    <div class="tab-pane fade show active" id="Description">
      <div v-html="productStore.product.details"></div>
    </div>
    <div class="tab-pane fade" id="Additional-info">
      <div v-html="productStore.product.info_and_care"></div>
    </div>

    <!--Reviews-->
    <div class="tab-pane fade" id="Reviews">
      <div class="tab-pane fade active show" id="Reviews">
        <div class="reviews-area">
          <ReviewForm />

          <Reviews />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from "@/pages/ProductDetailPage/stores";

import { ReviewForm, Reviews } from "@/pages/ProductDetailPage/components";

const productStore = useProductStore();
</script>
