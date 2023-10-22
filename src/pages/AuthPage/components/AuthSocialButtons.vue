<template>
  <ul class="google-github-buttons">
    <li>
      <a role="button" @click="loginGitub" class="btn btn-dark">
        <i class="bi bi-github me-1"></i>
        Sign in With Github
      </a>
    </li>
    <li>
      <a class="btn btn-danger">
        <i class="bi bi-google me-1"></i>
        Sign in With Google
      </a>
    </li>
  </ul>
</template>
<script setup>
import useAuthService from "@/pages/AuthPage/services/useAuthService";

const { loginGitub } = useAuthService();
</script>
