<script setup>
import DesktopLayout from "@/layouts/desktop/DesktopLayout.vue";
import MobileLayout from "@/layouts/mobile/MobileLayout.vue";
import { isDesktop, isMobile } from "@/helpers";
import { defineAsyncComponent } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner/views/LoadingSpinner.vue";

const Toast = defineAsyncComponent(() =>
  import("@/components/Toast/index.vue")
);
</script>

<template>
  <DesktopLayout v-if="isDesktop" />
  <MobileLayout v-if="isMobile" />

  <Toast />
  <Teleport to="#LoadingSpinner">
    <LoadingSpinner />
  </Teleport>
</template>
