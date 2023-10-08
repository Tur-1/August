<script setup>
import useBottomOffcanvas from "@/components/Offcanvas/services/useBottomOffcanvas";

const props = defineProps({
  isOpen: Boolean,
  id: String,
  borderRadius: {
    type: String,
    default: "11px",
  },
  height: {
    type: String,
    default: "60%",
  },
});
</script>
<template>
  <div
    class="bottom-offcanvas-bg"
    @click="useBottomOffcanvas.close(props.id, $event)"
    :class="{ show: useBottomOffcanvas.id == props.id }"
    :id="props.id"
  >
    <div class="bottom-offcanvas-container">
      <div class="bottom-offcanvas-header">
        <slot name="header"> </slot>
      </div>
      <div class="bottom-offcanvas-body">
        <slot name="body"> </slot>
      </div>
      <div class="bottom-offcanvas-footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bottom-offcanvas-container {
  height: v-bind(height);
}
.bottom-offcanvas-header {
  border-top-right-radius: v-bind(borderRadius);
  border-top-left-radius: v-bind(borderRadius);
}
</style>
