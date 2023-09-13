<template>
  <div class="address_actions p-0">
    <button class="bg-transparent border-0 btn-sm" @click="$emit('onEdit')">
      <i class="bi bi-pencil-square"></i>
    </button>
    <span class="border-start m-2"></span>
    <button class="bg-transparent border-0 btn-sm" @click="$emit('onDelete')">
      <i class="bi bi-trash3"></i>
    </button>
  </div>
</template>

<script setup>
defineEmits(["onEdit", "onDelete"]);
</script>
