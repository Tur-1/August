<template>
  <div class="d-flex justify-content-center mt-5 mb-3">
    <div class="mobile-pagination">
      <a
        class="page-link me-5"
        :class="{ hidden: !pagination.prev_page_url }"
        role="button"
        @click="changePage(pagination.prev_page_url)"
      >
        <i class="bi bi-chevron-left" style="font-size: 20px !important"></i>
      </a>
      <div>
        <strong>PAGE {{ pagination.current_page }}</strong>
      </div>
      <a
        class="page-link ms-5"
        role="button"
        @click="changePage(pagination.next_page_url)"
        :class="{ hidden: !pagination.next_page_url }"
      >
        <i class="bi bi-chevron-right" style="font-size: 20px !important"> </i>
      </a>
    </div>
  </div>
</template>
<script setup>
defineProps(["pagination"]);
const emits = defineEmits(["onPageChange"]);

const changePage = (url) => {
  emits("onPageChange", url);

  window.scrollTo(0, 0);
};
</script>
