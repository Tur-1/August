<template>
  <header class="mobile-header">
    <nav class="navigation">
      <div class="nav-back-button" v-if="routeService.previousPage">
        <Link :to="routeService.previousPage">
          <i class="bi bi-arrow-left"></i>
        </Link>
      </div>
      <span class="page-title" v-if="!route.meta.hidePageTitle">
        {{ routeService.pageTitle }}
      </span>
      <SearchBar />
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from "vue-router";
import SearchBar from "@/layouts/mobile/components/SearchBar/index.vue";
import useRouterStore from "@/router/RouterStore";

const route = useRoute();
const routeService = useRouterStore();
</script>
