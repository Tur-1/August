<template>
  <section>
    <!--v-if-->
    <div class="mt-3 container-fluid">
      <!--v-if-->
      <div class="row">
        <div data-v-96a82119="" class="mb-4 col-lg-7" style="">
          <div data-v-96a82119="" class="shopping-cart-item">
            <div data-v-96a82119="" class="cart-item" id="cart-item-27">
              <!--v-if--><a
                data-v-96a82119=""
                href="/product-detail/airflex-light-wash-slim-fit-jeans"
                class="cart-item-image"
                ><img
                  src="/products/product_22/1695182727-1-mobile-web-catalogspkrgd;l.png"
                  class="img-fluid"
              /></a>
              <div data-v-96a82119="" class="cart-item-details">
                <div data-v-96a82119="" class="cart-item-details-col">
                  <a
                    href="/product-detail/airflex-light-wash-slim-fit-jeans"
                    class="brand-name"
                    >American Eagle</a
                  ><span class="description"
                    >Airflex+ Light Wash Slim Fit Jeans</span
                  ><span class="size"> size: S</span>
                  <div data-v-96a82119="" class="d-flex align-items-baseline">
                    <div data-v-96a82119="" class="cart-item-quantity">
                      <button
                        disabled=""
                        class="quantity-btn rounded-start"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="bi bi-dash"></i></button
                      ><small class="quantity-value">1</small
                      ><button
                        class="quantity-btn rounded-end"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <!--v-if-->
                  </div>
                </div>
                <div data-v-96a82119="" class="cart-item-details-col">
                  <span class="discounted-price">321.00 SAR</span
                  ><span class="price">256.80 SAR</span>
                </div>
              </div>
            </div>
            <div data-v-96a82119="" class="swipe-cart-item-actions">
              <button class="swipe-cart-item-action save-btn">
                <i class="bi bi-heart"></i
                ><small> move to wishlist</small></button
              ><button class="swipe-cart-item-action remove-btn" type="button">
                <i class="bi bi-trash"></i><small>Remove</small>
              </button>
            </div>
          </div>
        </div>
        <div data-v-96a82119="" class="col-lg-7" style="display: none">
          <div class="shopping-cart-item placeholder-wave">
            <div class="cart-item">
              <a class="cart-item-image placeholder"></a>
              <div class="cart-item-details">
                <div class="d-flex flex-column w-75">
                  <a class="brand-name placeholder w-50 mb-3"></a
                  ><span class="description placeholder w-75 mb-3"></span
                  ><span class="size placeholder mb-3 w-25"></span
                  ><span class="size placeholder w-50"></span>
                </div>
                <div class="d-flex flex-column align-self-end w-25">
                  <a class="placeholder w-100 mb-3"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="shopping-cart-item placeholder-wave">
            <div class="cart-item">
              <a class="cart-item-image placeholder"></a>
              <div class="cart-item-details">
                <div class="d-flex flex-column w-75">
                  <a class="brand-name placeholder w-50 mb-3"></a
                  ><span class="description placeholder w-75 mb-3"></span
                  ><span class="size placeholder mb-3 w-25"></span
                  ><span class="size placeholder w-50"></span>
                </div>
                <div class="d-flex flex-column align-self-end w-25">
                  <a class="placeholder w-100 mb-3"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="shopping-cart-item placeholder-wave">
            <div class="cart-item">
              <a class="cart-item-image placeholder"></a>
              <div class="cart-item-details">
                <div class="d-flex flex-column w-75">
                  <a class="brand-name placeholder w-50 mb-3"></a
                  ><span class="description placeholder w-75 mb-3"></span
                  ><span class="size placeholder mb-3 w-25"></span
                  ><span class="size placeholder w-50"></span>
                </div>
                <div class="d-flex flex-column align-self-end w-25">
                  <a class="placeholder w-100 mb-3"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 cart-details-container">
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
                href="/checkout"
                class="btn btn-primary shooping-cart-details-button"
                ><i class="bi bi-credit-card me-2"></i> proceed to checkout
              </a>
            </div>
          </div>
        </div>
        <!--v-if-->
      </div>
      <!--v-if-->
    </div>
  </section>
  <!-- <section>
    <BaseBreadcrumb activePage="shopping cart" v-if="isDesktop" />
    <div
      class="mt-3"
      :class="{ container: isDesktop, 'container-fluid': isMobile }"
    >
      <CartHeader v-if="isDesktop" />
      <div class="row">
        <CartItem />

        <CartDetails />
      </div>
      <CartEmpty v-if="CartCounter.counter == 0 && !CartStore.isLoading" />
    </div>
  </section> -->
</template>

<script setup>
import BaseBreadcrumb from "@/components/BaseBreadcrumb/index.vue";
import { isDesktop, isMobile } from "@/helpers";
import { onMounted } from "vue";
import {
  CartItem,
  CartDetails,
  CartEmpty,
} from "@/pages/ShoppingCartPage/components";
import CartHeader from "@/pages/ShoppingCartPage/components/CartHeader/index.vue";

import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import {
  CartStore,
  useCartCounterStore,
} from "@/pages/ShoppingCartPage/stores";

// const { getCartProducts } = useShoppingCartService();
// const CartCounter = useCartCounterStore();
// onMounted(async () => {
//   CartStore.showLoading();
//   await getCartProducts();

//   CartStore.hideLoading();
// });
</script>
