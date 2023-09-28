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

// const { getCheckoutContent } = useCheckoutService();

// onMounted(async () => {
//   skeletonLoading.show();
//   await getCheckoutContent();
//   skeletonLoading.hide();
// });
</script>
<template>
  <section>
    <!--v-if-->
    <div class="container mt-3">
      <!--v-if-->
      <div class="row">
        <div class="col-xl-8 col-lg-7 col-md-6 mb-4">
          <div class="p-1 mb-4">
            <button class="btn btn-dark d-flex align-items-center m-2">
              <span class="text-bold"
                ><i class="bi bi-plus-circle"></i> New Address
              </span>
            </button>
          </div>
          <!--v-if--><!--v-if-->
          <div class="card p-2 pe-3 pb-0 mb-3 w-100">
            <div
              class="d-flex align-items-center justify-content-between pb-2 w-100"
            >
              <label
                class="form-check-label d-flex align-items-center"
                for="address_label-5"
                style="width: 90%"
                ><div class="form-check align-self-start">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="address_id"
                    id="address_label-5"
                    value="5"
                  />
                </div>
                <div class="d-flex flex-column ms-3">
                  turki noman alharbi
                  <span class="text-secondary" style="font-size: 11px"
                    >1223232323232</span
                  >
                  <div class="row text-dark">
                    <span>المدينة المنورة</span
                    ><span>Alzubair Ibn al Awwam street</span
                    ><span>Alzubair Ibn al Awwam street</span>
                  </div>
                </div></label
              >
              <div
                class="d-flex justify-content-end align-self-start"
                style="width: 20%"
              >
                <div class="address_actions p-0">
                  <button class="bg-transparent border-0 btn-sm">
                    <i class="bi bi-pencil-square"></i></button
                  ><span class="border-start m-2"></span
                  ><button class="bg-transparent border-0 btn-sm">
                    <i class="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--v-if--><!-- Modal --><!--v-if--><!--v-if-->
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 mb-5">
          <div class="card border-0 pb-0">
            <div class="checkout-product" id="cart-item-27">
              <!--v-if--><a
                href="/product-detail/airflex-light-wash-slim-fit-jeans"
                class="checkout-product-image"
                ><img
                  src="http://localhost:8000/storage/images/products/product_22/1695182727-1-mobile-web-catalogspkrgd;l.png"
                  class="img-fluid"
              /></a>
              <div class="checkout-product-details">
                <div class="checkout-product-details-col">
                  <a
                    href="/product-detail/airflex-light-wash-slim-fit-jeans"
                    class="brand-name"
                    >American Eagle</a
                  ><span class="description"
                    >Airflex+ Light Wash Slim Fit Jeans</span
                  ><span class="size"> size: S</span
                  ><span class="checkout-product-qty"> Quantity: 1</span>
                </div>
                <div class="checkout-product-details-col">
                  <span class="discounted-price">321.00 SAR</span
                  ><span class="price">256.80 SAR</span>
                </div>
              </div>
            </div>
          </div>
          <!--v-if-->
          <div class="card_checkout_coupon_form mb-4">
            <div class="card">
              <div class="checkout_coupon_form">
                <input
                  type="text"
                  placeholder="Enter Coupon Code..."
                  class="form-control border-0 shadow-none bg-transparent p-2"
                /><button
                  class="text-primary bg-transparent me-2"
                  type="button"
                >
                  Apply
                </button>
              </div>
            </div>
            <!--v-if-->
            <div class="m-2">
              <span class="text-primary" style="font-size: 12px"></span>
            </div>
          </div>
          <div class="cart-details-container">
            <div class="card border-0 p-0">
              <div class="card-body p-0 pt-2">
                <ul class="list-group list-group-flush p-2">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                  >
                    cart subtotal <span>256.80 SAR</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center px-0"
                  >
                    shipment fees <span>Free</span>
                  </li>
                  <li class="list-group-item px-0" style="display: none">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span> Discount: () </span><span> SAR </span>
                    </div>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0"
                  >
                    <div>
                      <strong>The total amount </strong
                      ><strong><p class="mb-0">(including VAT)</p></strong>
                    </div>
                    <span><strong>295.32 SAR</strong></span>
                  </li>
                </ul>
                <a
                  role="button"
                  class="btn btn-primary shooping-cart-details-button"
                  ><i class="bi bi-credit-card me-2"></i> buy now
                </a>
              </div>
            </div>
          </div>
          <!--v-if-->
        </div>
      </div>
    </div>
  </section>
  <!-- <section>
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
  </section> -->
</template>
