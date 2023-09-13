<script setup>
import { watch } from "vue";
const props = defineProps(["modelValue", "id", "class", "label", "name"]);

defineEmits(["update:modelValue"]);
</script>
<template>
  <label class="base-checkbox-warp">
    <div class="d-flex align-items-center">
      <div class="base-checkbox-input">
        <input class="form-check-input" :class="class" type="checkbox" :name="name" :id="id" :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)" />
      </div>
      <span class="me-2" v-if="label"> {{ label }} </span>
    </div>
  </label>
</template>
