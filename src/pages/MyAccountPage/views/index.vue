<template>
  <MobileMyAccountPage v-if="isMobile" />
  <DesktopMyAccountPage v-if="isDesktop" />
</template>

<script setup>
import { isDesktop, isMobile } from "@/helpers";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { defineAsyncComponent, onMounted } from "vue";
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";

const DesktopMyAccountPage = defineAsyncComponent(() =>
  import("@/pages/MyAccountPage/views/desktop/DesktopMyAccountPage.vue")
);
const MobileMyAccountPage = defineAsyncComponent(() =>
  import("@/pages/MyAccountPage/views/mobile/MobileMyAccountPage.vue")
);

const { getUserOrders } = useMyAccountService();
const { getUserAddresses } = useUserAddressService();

onMounted(() => {
  Promise.all([getUserAddresses(), getUserOrders()]);
});
</script>
