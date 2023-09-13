<template>
  <div class="p-1 mb-4">
    <button
      class="btn btn-dark d-flex align-items-center m-2"
      @click="openNewAddressModal"
    >
      <span class="text-bold">
        <i class="bi bi-plus-circle"> </i>
        New Address
      </span>
    </button>
  </div>
</template>
<script setup>
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";

const { openNewAddressModal } = useUserAddressService();
</script>
