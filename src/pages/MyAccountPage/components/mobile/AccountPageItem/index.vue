<template>
  <li>
    <button @click="$emit('onClick')" role="button" class="text-dark">
      <i :class="props.icon"></i>

      <div
        class="d-flex justify-content-between align-items-center w-100 border-bottom pb-2"
      >
        <span class="account-item-title">{{ props.title }}</span>
        <i class="bi bi-chevron-right"></i>
      </div>
    </button>
  </li>

  <MainOffcanvas :id="id" :title="props.title">
    <template #body>
      <slot />
    </template>
  </MainOffcanvas>
</template>

<script setup>
import { MainOffcanvas } from "@/components/Offcanvas";
const props = defineProps(["title", "icon", "id"]);
defineEmits(["onClick"]);
</script>
