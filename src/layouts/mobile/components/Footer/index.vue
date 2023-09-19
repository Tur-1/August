<script setup>
import { useRoute, useRouter } from "vue-router";
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import { useCartCounterStore } from "@/pages/ShoppingCartPage/stores";
import { onMounted } from "vue";
import useAuthUserStore from "@/pages/AuthPage/stores/AuthUserStore";
import FooterItem from "@/layouts/mobile/components/Footer/FooterItem.vue";

const route = useRoute();

const { getCartCount } = useShoppingCartService();
const CartCounter = useCartCounterStore();
const authStore = useAuthUserStore();

onMounted(async () => {
  await useRouter().isReady();
  let routes = ["shoppingCart", "checkout"];
  if (authStore.isAuthenticated && !routes.includes(route.name)) {
    await getCartCount();
  }
});
</script>
<template>
  <footer id="mobile-footer" class="footer safari">
    <ul class="footer-items">
      <FooterItem page-name="Home" route-name="home" icon="bi bi-house-door" />
      <FooterItem
        page-name="Categories"
        route-name="categories"
        icon="bi bi-grid"
      />
      <FooterItem page-name="Cart" route-name="shoppingCart" icon="bi bi-bag">
        <template #badge>
          <span class="cart-counter">{{ CartCounter.counter }}</span>
        </template>
      </FooterItem>
      <FooterItem
        page-name="Wishlist"
        route-name="wishlist"
        icon="bi bi-heart"
      />
      <FooterItem
        page-name="My Account"
        route-name="myAccount"
        icon="bi bi-person-circle"
        :fill="false"
      />
    </ul>
  </footer>
</template>
