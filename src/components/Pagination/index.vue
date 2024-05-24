<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="link in links"
        :class="{ active: link.active }"
      >
        <button
          :disabled="link.url == null || link.active == true"
          role="button"
          @click="changePage(link.url)"
          class="page-link"
          v-html="link.label"
        >
          
        </button>
      </li>
    </ul>
  </nav>
</template>
<script setup>
defineProps(["links"]);

const emits = defineEmits(["onPageChange"]);

const changePage = (url) => {
  window.scrollTo(0, 0);

  emits("onPageChange", url);
};
</script>
