<script setup>
import { FormInput, FormStore } from "@/components/BaseForm";
import { useAuthTabsStore } from "@/pages/AuthPage/stores";
import BaseSubmitButton from "@/components/BaseSubmitButton/index.vue";
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { onMounted } from "vue";
const { login } = useAuthService();

onMounted(() => {
  FormStore.setFields({
    email: "",
    password: "",
  });
});
</script>
<template>
  <div
    :class="{ 'show active': useAuthTabsStore.Tab == 1 }"
    class="auth-form-content tab-pane fade"
    id="login-form"
    role="tabpanel"
    aria-labelledby="login-tab"
  >
    <form @submit.prevent="login">
      <FormInput
        label="Email *"
        type="email"
        id="login_email"
        v-model="FormStore.fields.email"
        :error="FormStore.errors.email"
      />
      <FormInput
        label="Password *"
        type="password"
        id="login_password"
        v-model="FormStore.fields.password"
        :error="FormStore.errors.password"
      />

      <BaseSubmitButton title="sign in" class="w-100 mt-3 mb-1" />
    </form>
  </div>
</template>
