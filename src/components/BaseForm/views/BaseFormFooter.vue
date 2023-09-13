<template>
  <div class="base-form-footer">
    <button type="button" class="cancel-btn" @click="$emit('onCancel')">
      cancel
    </button>

    <button
      type="submit"
      class="submit-btn"
      :disabled="useLoadingSpinner.isLoading"
    >
      <span>save</span>

      <div
        class="spinner-border spinner-border-sm opacity-0"
        role="status"
        :class="{ 'opacity-100': useLoadingSpinner.isLoading }"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  </div>
</template>

<script setup>
import { useLoadingSpinner } from "@/components/LoadingSpinner";

defineEmits(["onCancel"]);
</script>
