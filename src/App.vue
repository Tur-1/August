<script setup>
import { isDesktop, isMobile } from "@/helpers";
import LoadingSpinner from "@/components/LoadingSpinner/views/LoadingSpinner.vue";
import { defineAsyncComponent } from "vue";

const DesktopLayout = defineAsyncComponent(() =>
  import("@/layouts/desktop/DesktopLayout.vue")
);
const MobileLayout = defineAsyncComponent(() =>
  import("@/layouts/mobile/MobileLayout.vue")
);
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
