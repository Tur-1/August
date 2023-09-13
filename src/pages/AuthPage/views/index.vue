<script setup>
import AuthTabsHeader from "@/pages/AuthPage/components/AuthTabsHeader.vue";
import AuthSocialButtons from "@/pages/AuthPage/components/AuthSocialButtons.vue";

import Login from "@/pages/AuthPage/views/Login.vue";
import Register from "@/pages/AuthPage/views/Register.vue";
import ResetPasswrod from "@/pages/AuthPage/views/ResetPasswrod.vue";
</script>
<template>
  <div class="auth-container">
    <AuthTabsHeader />

    <div class="tab-content" id="myTabContent">
      <AuthSocialButtons />
      <Login />
      <Register />
      <ResetPasswrod />
    </div>
  </div>
</template>
