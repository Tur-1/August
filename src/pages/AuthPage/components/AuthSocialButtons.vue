<template>
  <ul class="google-github-buttons">
    <li>
      <a role="button" class="btn btn-dark">
        <i class="bi bi-github me-1"></i>
        Sign in With Github
      </a>
    </li>
    <li>
      <a class="btn btn-danger" :href="config.OAUTH_GOOGLE+'?redirect_intended_path='+useRouterStore().intendedPath">
        <i class="bi bi-google me-1"></i>
        Sign in With Google
      </a>
    </li>
  </ul>
</template>
<script setup>
import config from "@/config/app";
import useRouterStore from "@/router/RouterStore";

</script>
