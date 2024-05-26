<template>
  <div class="d-flex justify-content-center mt-5 mb-3">
    <div class="mobile-pagination">
      <a
        class="page-link me-5"
        :class="{ hidden: !props.prevPage}"
        role="button"
        @click="changePage(props.prevPage)"
      >
        <i class="bi bi-chevron-left" style="font-size: 20px !important"></i>
      </a>
      <div>
        <strong>PAGE {{ props.currentPage }}</strong>
      </div>
      <a
        class="page-link ms-5"
        role="button"
        @click="changePage(props.nextPage)"
        :class="{ hidden: !nextPage }"
      >
        <i class="bi bi-chevron-right" style="font-size: 20px !important"> </i>
      </a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  nextPage:{
    default:null,
  },
  currentPage:{
    default:null,
  },
  prevPage:{
    default:null,
  },
});
const emits = defineEmits(["onPageChange"]);

const changePage = (url) => {
  emits("onPageChange", url);

  window.scrollTo(0, 0);
};
</script>
