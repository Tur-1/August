<template>
  <div
    v-for="n in 10"
    :class="props.class"
    class="product-item product-item-skeleton mb-4"
  >
    <div class="card product-card placeholder-wave" aria-hidden="true">
      <div class="product-card-image" style="min-height: 310px !important">
        <div class="placeholder"></div>
      </div>

      <div class="card-body placeholder-wave p-1">
        <span class="placeholder col-5"></span>
        <span class="placeholder col-2"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-4 ms-1"></span>

        <span class="placeholder col-3"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  class: {
    type: String,
    default: "col-xl-3 col-lg-4 col-md-4 col-6",
  },
});
</script>
