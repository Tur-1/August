<template>
  <MobileMyAccountPage v-if="isMobile" />
  <DesktopMyAccountPage v-if="isDesktop" />
</template>

<script setup>
import { isDesktop, isMobile } from "@/helpers";
import MobileMyAccountPage from "@/pages/MyAccountPage/views/mobile/MobileMyAccountPage.vue";
import DesktopMyAccountPage from "@/pages/MyAccountPage/views/desktop/DesktopMyAccountPage.vue";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { onMounted } from "vue";
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";

const { getUserOrders } = useMyAccountService();
const { getUserAddresses } = useUserAddressService();

onMounted(() => {
  Promise.all([getUserAddresses(), getUserOrders()]);
});
</script>
