<template>
  <section>
    <BaseBreadcrumb activePage="shopping cart" v-if="isDesktop" />
    <div
      class="mt-3"
      :class="{ container: isDesktop, 'container-fluid': isMobile }"
    >
      <div class="row">
        <CartItem />

        <CartDetails />
      </div>
      <CartEmpty v-if="CartCounter.counter == 0 && !CartStore.isLoading" />
    </div>
  </section>
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
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import {
  CartStore,
  useCartCounterStore,
} from "@/pages/ShoppingCartPage/stores";

const { getCartProducts } = useShoppingCartService();
const CartCounter = useCartCounterStore();
onMounted(async () => {
  CartStore.showLoading();
  await getCartProducts();

  CartStore.hideLoading();
});
</script>
