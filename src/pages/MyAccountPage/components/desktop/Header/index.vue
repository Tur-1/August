<script setup>
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { useAuthUserStore } from "@/pages/AuthPage/stores";

const userStore = useAuthUserStore();
const { logout } = useAuthService();
</script>
<template>
  <div class="d-flex justify-content-between mb-4">
    <div>
      <span> Dashboard </span>
    </div>

    <div>
      <span style="text-align: center">
        Welcome Back, {{ userStore.user?.name }}
      </span>
    </div>

    <div>
      <a role="button" @click="logout" class="text-dark bg-transparent">
        <span>Sign out</span>
      </a>
    </div>
  </div>
  <div class="card shadow-sm mb-3">
    <div class="card-body text-center p-4">
      <h5 class="card-title">Profile</h5>
    </div>
  </div>
</template>
