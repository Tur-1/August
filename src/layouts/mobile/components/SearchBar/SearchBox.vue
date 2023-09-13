<template>
  <div
    class="nav-search-bar"
    :class="{ 'ms-1 me-1 w-100': route.name == 'categories' }"
    v-if="route.name == 'shop' || route.name == 'categories'"
  >
    <i class="bi bi-search"></i>
    <input
      type="text"
      placeholder="search"
      @keyup.enter="$emit('getSearchResults')"
      @click="$emit('openSearchModal')"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <i class="bi bi-x-lg" @click="$emit('clearSearchResults')"></i>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
defineProps(["modelValue"]);
defineEmits([
  "getSearchResults",
  "update:modelValue",
  "openSearchModal",
  "clearSearchResults",
]);

const route = useRoute();
</script>
