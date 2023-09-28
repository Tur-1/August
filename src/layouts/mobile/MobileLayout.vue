<script setup>
import { RouterView, useRoute } from "vue-router";
import Footer from "@/layouts/mobile/components/Footer/index.vue";
import Header from "@/layouts/mobile/components/Header/index.vue";
import { defineAsyncComponent } from "vue";

const BottomOffcanvas = defineAsyncComponent(() =>
  import("@/components/Offcanvas/views/BottomOffcanvas.vue")
);
const AuthPage = defineAsyncComponent(() =>
  import("@/pages/AuthPage/views/index.vue")
);
const route = useRoute();
</script>

<template>
  <Header />

  <main>
    <RouterView :key="route.path" />
  </main>
  <Footer />
  <Teleport to="#BottomOffcanvas">
    <BottomOffcanvas id="auth-modal" height="90%">
      <template #body>
        <AuthPage />
      </template>
    </BottomOffcanvas>
  </Teleport>
</template>
<style>
.auth-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}
</style>
