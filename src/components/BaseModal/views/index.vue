<template>
  <Transition name="modal">
    <div
      :id="id"
      class="base-modal-bg"
      v-if="useBaseModel.isOpen && useBaseModel.id == props.id"
    >
      <div class="base-modal">
        <div class="base-modal-content">
          <ModalHeader :title="title" @closeModal="$emit('closeModal')" />
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import ModalHeader from "@/components/BaseModal/views/ModalHeader.vue";
import { useBaseModel } from "@/components/BaseModal";
import { BaseForm } from "@/components/BaseForm";

const props = defineProps({
  onProgress: Boolean,
  id: {
    type: String,
    required: true,
  },
  title: String,
});
const emits = defineEmits(["closeModal", "submit"]);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
