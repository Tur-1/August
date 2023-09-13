<template>
  <transition name="fade">
    <div
      aria-hidden="true"
      class="search-collapse-body"
      v-if="isShown"
      id="collapseExample"
    >
      <div class="flex-column p-0 pb-3">
        <Link
          class="pt-1 pb-1 ps-3 pe-3 mb-1 d-flex justify-content-between align-items-center border-bottom"
        >
          <span>df sdf</span>
          <i class="bi bi-arrow-up-left"></i>
        </Link>
      </div>
    </div>
  </transition>
</template>
<script setup>
defineProps(["isShown"]);
</script>
