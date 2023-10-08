<script setup>
import { useMainOffcanvas } from "@/components/Offcanvas";
import { ref } from "vue";

const props = defineProps({
  id: String,
  title: String,
  left: {
    default: false,
    type: Boolean,
  },
  height: {
    type: String,
    default: "100vh",
  },
  position: {
    type: String,
    default: "fixed",
  },
  borderRadius: {
    type: String,
    default: "0",
  },
  standalone: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits(["onClose"]);
const closeOffcanvas = () => {
  useMainOffcanvas.close(props.id);

  emits("onClose");
};
let paddingTop = ref(0);
if (props.height == "100%") {
  paddingTop;
}
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
      <div
        class="main-offcanvas-header"
        :class="{ 'main-offcanvas-standalone-header': standalone }"
      >
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
<style scoped>
.main-offcanvas {
  height: v-bind(height) !important;
  position: v-bind(position) !important;
}
.main-offcanvas-header {
  border-top-right-radius: v-bind(borderRadius) !important;
  border-top-left-radius: v-bind(borderRadius) !important;
}
</style>
