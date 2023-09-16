<script setup>
import { useCouponStore, useCheckoutStore } from "@/pages/CheckoutPage/stores";
import useCheckoutService from "@/pages/CheckoutPage/services/useCheckoutService";
import { skeletonLoading } from "@/helpers";

const { applyCoupon } = useCheckoutService();
const couponStore = useCouponStore();
</script>

<template>
  <div class="card_checkout_coupon_form mb-4">
    <div class="card" v-if="!skeletonLoading.isLoading">
      <div class="checkout_coupon_form">
        <input
          type="text"
          placeholder="Enter Coupon Code..."
          class="form-control border-0 shadow-none bg-transparent p-2"
          v-model="couponStore.code"
        />
        <button
          class="text-primary bg-transparent me-2"
          type="button"
          @click="applyCoupon"
        >
          {{ couponStore.coupon !== null ? "remove" : "Apply" }}
        </button>
      </div>
    </div>
    <div
      class="card placeholder-wave border-0"
      v-if="skeletonLoading.isLoading"
    >
      <div class="checkout_coupon_form placeholder">
        <span
          class="form-control border-0 shadow-none bg-transparent p-2 w-100"
          style="height: 40px"
        />
      </div>
    </div>
    <div class="m-2">
      <span
        :class="couponStore.error ? 'text-danger' : 'text-primary'"
        style="font-size: 12px"
      >
        {{ couponStore.message }}
      </span>
    </div>
  </div>
</template>
