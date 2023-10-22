<script setup>
import { RouterView, useRoute } from "vue-router";
import Footer from "@/layouts/desktop/components/Footer.vue";
import Header from "@/layouts/desktop/components/Header.vue";
import useAuthModalStore from "@/pages/AuthPage/stores/AuthModalStore";
import { defineAsyncComponent } from "vue";

const AuthPage = defineAsyncComponent(() =>
  import("@/pages/AuthPage/views/index.vue")
);

const BaseModal = defineAsyncComponent(() =>
  import("@/components/BaseModal/views/index.vue")
);
const route = useRoute();
</script>

<template>
  <Teleport to="#Header">
    <Header />
  </Teleport>

  <RouterView :key="route.path" />
  <Teleport to="#Footer">
    <Footer />
  </Teleport>
  <BaseModal id="auth-modal" @closeModal="useAuthModalStore.close()">
    <AuthPage />
  </BaseModal>
</template>
