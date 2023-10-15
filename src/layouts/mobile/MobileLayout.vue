<script setup>
import { RouterView, useRoute } from "vue-router";
import Footer from "@/layouts/mobile/components/Footer/index.vue";
import Header from "@/layouts/mobile/components/Header/index.vue";
import { defineAsyncComponent } from "vue";
import { isRunningStandalone } from "@/helpers";

const BottomOffcanvas = defineAsyncComponent(() =>
  import("@/components/Offcanvas/views/BottomOffcanvas.vue")
);
const AuthPage = defineAsyncComponent(() =>
  import("@/pages/AuthPage/views/index.vue")
);
const route = useRoute();
</script>

<template>
  <Teleport to="#Header"> </Teleport>
  <Header />
  <RouterView :key="route.path" />
  <Footer />
  <Teleport to="#Footer"> </Teleport>
  <Teleport to="#BottomOffcanvas">
    <BottomOffcanvas
      id="auth-modal"
      :height="isRunningStandalone() ? '90%' : '77%'"
    >
      <template #body>
        <AuthPage />
      </template>
    </BottomOffcanvas>
  </Teleport>
</template>
