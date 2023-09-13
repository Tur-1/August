<script setup>
import { RouterView, useRoute } from "vue-router";
import Footer from "@/layouts/desktop/components/Footer.vue";
import Header from "@/layouts/desktop/components/Header.vue";
import { useAuthModalStore } from "@/pages/AuthPage/stores";
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
  <main>
    <Header />
    <RouterView :key="route.path" />
    <Footer />

    <BaseModal id="auth-modal" @closeModal="useAuthModalStore.close()">
      <AuthPage />
    </BaseModal>
  </main>
</template>
