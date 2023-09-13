<template>
  <div :class="{ withTitle: props.title }" class="base-modal-header">
    <button
      type="button"
      @click="$emit('closeModal')"
      class="base-modal-close-btn btn-close btn-close-white"
    ></button>
    <span class="base-modal-title" v-show="title">
      {{ title }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps(["title"]);
const emit = defineEmits(["closeModal"]);
</script>
