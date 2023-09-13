<script setup>
import { FormInput, FormStore } from "@/components/BaseForm";
import { useAuthTabsStore } from "@/pages/AuthPage/stores";
import GendersFields from "@/pages/AuthPage/components/GendersFields.vue";
import BaseSubmitButton from "@/components/BaseSubmitButton/index.vue";
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { onMounted } from "vue";
const { register } = useAuthService();

onMounted(() => {
  FormStore.setFields({
    register_name: "",
    register_email: "",
    register_password: "",
    password_confirmation: "",
    gender: "Male",
  });
});
</script>

<template>
  <div
    :class="{ 'show active': useAuthTabsStore.Tab == 2 }"
    class="auth-form-content tab-pane fade"
    id="register-form"
    role="tabpanel"
    aria-labelledby="register-form-tab"
  >
    <form @submit.prevent="register">
      <FormInput
        label="Name *"
        type="text"
        id="register_name"
        v-model="FormStore.fields.register_name"
        :error="FormStore.errors.register_name"
      />
      <FormInput
        label="Email *"
        type="email"
        id="register_email"
        v-model="FormStore.fields.register_email"
        :error="FormStore.errors.register_email"
      />
      <FormInput
        label="Password *"
        type="password"
        id="register_password"
        v-model="FormStore.fields.register_password"
        :error="FormStore.errors.register_password"
      />
      <FormInput
        label="confirm password *"
        type="password"
        id="password_confirmation"
        v-model="FormStore.fields.password_confirmation"
        :error="FormStore.errors.password_confirmation"
      />

      <GendersFields :form="FormStore" />

      <BaseSubmitButton title="sign up" class="w-100 mt-3 mb-1 auth-submit" />
    </form>
  </div>
</template>
