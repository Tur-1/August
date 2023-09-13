<template>
  <div class="col-lg-7" v-show="CartStore.isLoading">
    <div class="shopping-cart-item placeholder-wave" v-for="item in 3">
      <div class="cart-item">
        <a class="cart-item-image placeholder"> </a>
        <div class="cart-item-details">
          <div class="d-flex flex-column w-75">
            <a class="brand-name placeholder w-50 mb-3"> </a>
            <span class="description placeholder w-75 mb-3"></span>
            <span class="size placeholder mb-3 w-25"> </span>
            <span class="size placeholder w-50"> </span>
          </div>
          <div class="d-flex flex-column align-self-end w-25">
            <a class="placeholder w-100 mb-3"> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CartStore } from "@/pages/ShoppingCartPage/stores";
</script>
