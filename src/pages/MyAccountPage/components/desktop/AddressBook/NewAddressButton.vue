<template>
  <div class="p-1 mb-4" v-if="isMobile">
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
  <div
    class="card bg-white border-0 mb-3"
    v-if="isDesktop && !skeletonLoading.isLoading"
  >
    <button
      class="bg-transparent border-0 d-flex align-items-center m-2"
      @click="openNewAddressModal"
    >
      <span class="text-bold">
        <i class="bi bi-plus-circle me-2"> </i>
        New Address
      </span>
    </button>
  </div>
  <div
    class="card bg-white border-0 mb-3 placeholder-wave w-100"
    v-if="isDesktop && skeletonLoading.isLoading"
  >
    <span class="text-bold w-100 placeholder p-3" />
  </div>
</template>
<script setup>
import { isDesktop, isMobile, skeletonLoading } from "@/helpers";
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";

const { openNewAddressModal } = useUserAddressService();
</script>
