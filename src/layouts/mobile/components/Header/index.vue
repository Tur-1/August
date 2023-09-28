<template>
  <header class="mobile-header">
    <nav class="navigation">
      <div class="nav-back-button" v-if="routerStore.previousPage">
        <Link :to="routerStore.previousPage">
          <i class="bi bi-arrow-left"></i>
        </Link>
      </div>
      <span class="page-title" v-if="!route.meta.hidePageTitle">
        {{ routerStore.pageTitle }}
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
const routerStore = useRouterStore();
</script>
