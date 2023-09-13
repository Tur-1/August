<script setup>
import useWishlistService from "@/pages/WishlistPage/services/useWishlistService";
import BaseBreadcrumb from "@/components/BaseBreadcrumb/index.vue";
import DesktopHeader from "@/pages/WishlistPage/components/WishlistHeader.vue";
import MobileHeader from "@/pages/WishlistPage/components/WishlistHeaderMobile.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import { useWishlistStore } from "@/pages/WishlistPage/stores";
import { isDesktop, isMobile } from "@/helpers";
import { onMounted } from "vue";

const { getWishlistProducts } = useWishlistService();
onMounted(getWishlistProducts);

const wishlistStore = useWishlistStore();
</script>
<template>
  <section>
    <BaseBreadcrumb activePage="wishlist" v-if="isDesktop" />
    <div class="container">
      <MobileHeader v-if="isMobile" />
      <DesktopHeader v-if="isDesktop" />

      <div class="row d-flex justify-content-center">
        <ProductCard
          :products="wishlistStore.products"
          class="col-xl-2 col-lg-2 col-md-4 col-6"
        />
      </div>
    </div>
  </section>
</template>
