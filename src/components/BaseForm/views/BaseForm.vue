<template>
  <form @submit.prevent="$emit('onSubmit')" class="p-2">
    <div class="base-form-body">
      <slot />
    </div>
    <BaseFormFooter @onCancel="$emit('onCancel')" />
  </form>
</template>

<script setup>
import BaseFormFooter from "@/components/BaseForm/views/BaseFormFooter.vue";

defineEmits(["onSubmit", "onCancel"]);
</script>
