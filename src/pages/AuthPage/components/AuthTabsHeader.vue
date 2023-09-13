<template>
  <ul class="auth-tabs-header nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item auth-head-tab" role="presentation">
      <button
        class="nav-link"
        :class="{ active: useAuthTabsStore.Tab == 1 }"
        id="login-form-tab"
        type="button"
        role="tab"
        @click="useAuthTabsStore.openTab(1)"
        aria-controls="login-form"
        aria-selected="true"
      >
        <span>Sign in</span>
      </button>
    </li>

    <li class="nav-item auth-head-tab" role="presentation">
      <button
        class="nav-link"
        id="register-form-tab"
        :class="{ active: useAuthTabsStore.Tab == 2 }"
        @click="useAuthTabsStore.openTab(2)"
        type="button"
        role="tab"
        aria-controls="register-form"
        aria-selected="false"
      >
        <span>Sign up</span>
      </button>
    </li>
  </ul>
</template>
<script setup>
import { useAuthTabsStore } from "@/pages/AuthPage/stores";
</script>
