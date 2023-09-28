<script setup>
import BaseBreadcrumb from "@/components/BaseBreadcrumb/index.vue";
import {
  CheckoutProduct,
  CheckoutDetails,
  CheckoutHeader,
  CheckoutCouponForm,
  CheckoutAddresses,
} from "@/pages/CheckoutPage/components";
import { onMounted } from "vue";
import useCheckoutService from "@/pages/CheckoutPage/services/useCheckoutService";
import { isDesktop, skeletonLoading } from "@/helpers";

const { getCheckoutContent } = useCheckoutService();

onMounted(async () => {
  skeletonLoading.show();
  await getCheckoutContent();
  skeletonLoading.hide();
});
</script>
<template>
  <section>
    <BaseBreadcrumb activePage="checkout" class="bg-white" v-if="isDesktop" />
    <div class="container mt-3">
      <CheckoutHeader v-if="isDesktop" />
      <div class="row">
        <div class="col-xl-8 col-lg-7 col-md-6 mb-4">
          <CheckoutAddresses />
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 mb-5">
          <CheckoutProduct />

          <CheckoutCouponForm />
          <CheckoutDetails />
        </div>
      </div>
    </div>
  </section>
</template>
