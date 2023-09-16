<template>
  <div class="breadcrumb-wrap" :class="class">
    <div class="container">
      <div class="row">
        <div class="breadcrumb text-wrap">
          <div class="breadcrumb-item">
            <Link to="/"> Home</Link>
            <i class="bi bi-chevron-right"></i>
          </div>
          <slot />
          <span class="current-breadcrumb-item"> {{ activePage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  activePage: String,
  class: String,
});
</script>
