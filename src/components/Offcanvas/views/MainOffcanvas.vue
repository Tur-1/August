<script setup>
import { useMainOffcanvas } from "@/components/Offcanvas";

const props = defineProps({
  id: String,
  title: String,
  left: {
    default: false,
    type: Boolean,
  },
});
const emits = defineEmits(["onClose"]);
const closeOffcanvas = () => {
  useMainOffcanvas.close(props.id);

  emits("onClose");
};
</script>
<template>
  <div
    :id="props.id"
    class="main-offcanvas"
    :class="{
      'left-offcanvas': props.left,
      'right-offcanvas': !props.left,
      show: useMainOffcanvas.isOpen && props.id == useMainOffcanvas.id,
    }"
  >
    <div class="main-offcanvas-container">
      <div class="main-offcanvas-header">
        <button
          class="main-offcanvas-header-close-btn"
          type="button"
          @click="closeOffcanvas"
        >
          <div>
            <i class="bi bi-arrow-left"></i>
          </div>
          <div>
            <span>{{ props.title }}</span>
          </div>
        </button>
      </div>
      <div class="main-offcanvas-body">
        <slot name="body"> </slot>
      </div>
      <div class="main-offcanvas-footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>
