<template>
  <Transition name="modal">
    <div :id="id ?? 'confirm-modal'" class="confirm-modal-bg" v-if="useConfirmModal.isOpen">
      <div class="confirm-modal">
        <div class="confirm-modal-content">
          <div class="confirm-modal-body">
            <h5>{{ title }}</h5>
            <h6 v-if="!slots.body">are you sure ?</h6>
            <slot name="body" />
          </div>
          <div class="confirm-modal-footer">
            <button type="button" class="cancel-btn" @click="$emit('onCancel')">
              <span>Cancel</span>
            </button>

            <button type="button" class="confirm-btn" @click="$emit('onConfirm')" :disabled="useLoadingSpinner.isLoading">
              <span>Confirm</span>
              <div class="spinner-border spinner-border-sm opacity-0" role="status" :class="{
                'opacity-100 ms-3': useLoadingSpinner.isLoading,
              }">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { useConfirmModal } from "@/components/ConfirmModel";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useSlots } from "vue";


const props = defineProps({
  id: String,
  title: String,
});
const emits = defineEmits(["submit", "onConfirm", "onCancel"]);

const slots = useSlots();
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
