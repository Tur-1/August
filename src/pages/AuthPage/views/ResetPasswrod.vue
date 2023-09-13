<template>
  <div
    :class="{ 'show active': useAuthTabsStore.Tab == 3 }"
    class="auth-form-content tab-pane fade"
    id="ResetPassword"
    role="tabpanel"
  >
    <div class="text-center">
      <span class="text-dark">Reset Password</span>

      <div class="mt-3 mb-3">
        <span class="text-primary" style="font-size: 12px"> </span>
      </div>
    </div>

    <div class="p-1">
      <form @submit.prevent="sendPasswordResetLink">
        <FormInput
          label="E-Mail Address *"
          type="email"
          id="Reset_email"
          v-model="FormStore.fields.email"
          :error="FormStore.errors.email"
        />

        <div class="mt-3 mb-2 text-center">
          <BaseSubmitButton
            :onProgress="FormStore.onProgress"
            title=" Send Password Reset Link"
            class="w-100 mt-3 mb-1 auth-submit"
          />
        </div>
      </form>
    </div>
  </div>

  <div class="m-2 text-end">
    <a
      href="#"
      role="button"
      class="text-dark"
      @click="useAuthTabsStore.openTab(3)"
    >
      Forgot password?
    </a>
  </div>
</template>
<script setup>
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { useAuthTabsStore } from "@/pages/AuthPage/stores";
import { FormInput, FormStore } from "@/components/BaseForm";
import BaseSubmitButton from "@/components/BaseSubmitButton/index.vue";

const { sendPasswordResetLink } = useAuthService();
</script>
