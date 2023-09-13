<template>
  <div class="card-body d-flex flex-column">
    <span class="text-secondary" style="font-size: 11px">
      {{ address.phone_number }}
    </span>
    <div class="row text-dark">
      <span> {{ address.city }} </span>
      <span> {{ address.address }} </span>
      <span> {{ address.street }} </span>
    </div>
  </div>
</template>

<script setup>
defineProps(["address"]);
</script>
