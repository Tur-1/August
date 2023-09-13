<template>
  <div class="row d-flex flex-column justify-content-center text-center mt-5">
    <h4 class="mb-3">Your Shopping Bag is Empty</h4>

    <Link to="/">CONTINUE SHOPPING</Link>
  </div>
</template>
<script setup>
const props = defineProps({
  show: Boolean,
});
</script>
