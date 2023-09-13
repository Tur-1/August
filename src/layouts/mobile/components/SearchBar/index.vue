<script setup>
import { ref } from "vue";
import SearchBox from "@/layouts/mobile/components/SearchBar/SearchBox.vue";
import SearchContent from "@/layouts/mobile/components/SearchBar/SearchContent.vue";

let isShown = ref(false);
</script>
<template>
  <SearchBox />
  <SearchContent :isShown="isShown" />
</template>
