<template>
  <section class="d-flex justify-content-center">
    <div class="container m-auto">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form @submit.prevent="resetPassword">
            <FormInput
              label="Email *"
              type="email"
              id="reset_form_email"
              v-model="FormStore.fields.email"
              :error="FormStore.errors.email"
            />
            <FormInput
              label="Password *"
              type="password"
              id="reset_form_password"
              v-model="FormStore.fields.password"
              :error="FormStore.errors.password"
            />
            <FormInput
              label="confirm password *"
              type="password"
              id="reset_form_confirmation"
              v-model="FormStore.fields.password_confirmation"
              :error="FormStore.errors.password_confirmation"
            />
            <BaseSubmitButton
              :onProgress="FormStore.onProgress"
              title="Reset Password"
              class="w-100 mt-3 mb-1 auth-submit"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { FormInput, FormStore } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import BaseSubmitButton from "@/components/BaseSubmitButton/index.vue";
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { onMounted } from "vue";

const route = useRoute();

const { resetPassword } = useAuthService();

onMounted(() => {
  FormStore.setFields({
    token: route.params.token,
    email: route.query.email,
    password: "",
    password_confirmation: "",
  });
});
</script>
