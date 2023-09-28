<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  routeName: String,
  active: Boolean,
  routeParams: Object,
  title: String,
});

const route = useRoute();
</script>
<template>
  <li class="nav-item">
    <Link
      :to="{
        name: props.routeName,
        params: props.routeParams,
      }"
      :class="{ active: route.name == routeName || active }"
    >
      {{ props.title }}
    </Link>
  </li>
</template>
