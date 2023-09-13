<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useDesktopLayoutService from "@/layouts/desktop/services/useDesktopLayoutService";
import SectionsStore from "@/layouts/desktop/stores/SectionsStore";
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import { useCartCounterStore } from "@/pages/ShoppingCartPage/stores";
import { useAuthUserStore } from "@/pages/AuthPage/stores";

const { getAllSections } = useDesktopLayoutService();
const route = useRoute();
const authStore = useAuthUserStore();
const CartCounter = useCartCounterStore();
const { getCartCount } = useShoppingCartService();

onMounted(async () => {
  await useRouter().isReady();
  await getAllSections();
  let routes = ["shoppingCart", "checkout"];
  if (authStore.isAuthenticated && !routes.includes(route.name)) {
    await getCartCount();
  }
});
</script>
<template>
  <header class="desktop-navbar">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <h3 class="navbar-brand">
          <Link class="text-dark" to="/"> August </Link>
        </h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                :class="{ active: route.name == 'home' }"
                :to="{ name: 'home' }"
              >
                Home
              </Link>
            </li>
            <li class="nav-item" v-for="section in SectionsStore.list">
              <Link
                :to="{
                  name: 'shop',
                  params: {
                    categoryUrl: section.url,
                  },
                }"
                :class="{ active: section.url == route.params.categoryUrl }"
              >
                {{ section.name }}
              </Link>
            </li>
          </ul>

          <div class="nav-icons-container">
            <Link :to="{ name: 'myAccount' }" class="nav-icons">
              <img
                class="svgInject"
                alt="Evara"
                src="@/assets/icons/account.svg"
              />
            </Link>
            <Link class="nav-icons" :to="{ name: 'wishlist' }">
              <img
                class="svgInject"
                alt="Evara"
                src="@/assets/icons/icon-heart.svg"
              />
            </Link>
            <Link class="nav-icons" :to="{ name: 'shoppingCart' }">
              <img alt="Evara" src="@/assets/icons/icon-cart.svg" />
              <span class="badge badge-circle">
                {{ CartCounter.counter }}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
