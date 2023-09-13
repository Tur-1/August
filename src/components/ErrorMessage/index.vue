<template>
  <span class="text-danger mt-1 ms-2" style="font-size: 12px" v-show="message">
    {{ message }}
  </span>
</template>
<script setup>
defineProps(["message"]);
</script>
