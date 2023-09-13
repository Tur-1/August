<template>
  <div v-if="!skeletonLoading.isLoading" class="cart-details-container">
    <div class="card border-0 p-0">
      <div class="card-body p-0 pt-2">
        <ul class="list-group list-group-flush p-2">
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
          >
            cart subtotal
            <span>{{ CheckoutStore.cartDetails.sub_total }} SAR</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center px-0"
          >
            shipment fees
            <span>
              {{
                CheckoutStore.cartDetails.shipping_fees == 0
                  ? "Free"
                  : CheckoutStore.cartDetails.shipping_fees + " SAR"
              }}
            </span>
          </li>
          <li class="list-group-item px-0" v-show="couponStore.coupon !== null">
            <div class="d-flex justify-content-between align-items-center">
              <span> Discount: ({{ couponStore.coupon?.code }}) </span>
              <span>{{ couponStore.coupon?.discounted_amount }} SAR </span>
            </div>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0"
          >
            <div>
              <strong>The total amount </strong>
              <strong>
                <p class="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span
              ><strong>{{ CheckoutStore.cartDetails.total }} SAR</strong></span
            >
          </li>
        </ul>
        <a
          role="button"
          @click="buyNow"
          class="btn btn-primary shooping-cart-details-button"
        >
          <i class="bi bi-credit-card me-2"></i>
          buy now
        </a>
      </div>
    </div>
  </div>

  <CheckoutDetailsSkeleton v-if="skeletonLoading.isLoading" />
</template>
<script setup>
import { skeletonLoading } from "@/helpers";
import { CheckoutDetailsSkeleton } from "@/pages/CheckoutPage/components";
import useCheckoutService from "@/pages/CheckoutPage/services/useCheckoutService";

import { useCheckoutStore, useCouponStore } from "@/pages/CheckoutPage/stores";
const CheckoutStore = useCheckoutStore();
const couponStore = useCouponStore();

const { buyNow } = useCheckoutService();
</script>
