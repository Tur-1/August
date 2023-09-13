<template>
  <div
    class="LoadingSpinner"
    :class="{ 'd-flex': useLoadingSpinner.isLoading }"
  >
    <div class="spinner-box">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import useLoadingSpinner from "@/components/LoadingSpinner/stores/useLoadingSpinner";
</script>
