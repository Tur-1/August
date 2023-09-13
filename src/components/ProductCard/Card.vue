<template>
  <div :class="props.class" class="product-item mb-4">
    <div class="card product-card">
      <Link
        class="product-card-image"
        :to="{ name: 'productDetail', params: { productSlug: product.slug } }"
      >
        <img
          loading="lazy"
          :src="product.main_image_url"
          class="card-img-top"
          alt="."
        />
        <span
          class="product-card-out-of-stock out-of-stock-bg p-1"
          v-show="!product.in_stock"
        >
          out of stock
        </span>
      </Link>
      <button
        type="button"
        tabindex="-1"
        class="wishlist-btn text-center"
        @click="$emit('addToWishList')"
      >
        <svg
          :class="{
            'in-wishlist': product.inWishlist,
          }"
          xmlns="http://www.w3.org/2000/svg"
          class="wishlist-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"
          ></path>
        </svg>
      </button>

      <div class="card-body product-content-card-body">
        <span class="product-title">
          <span class="text-wrap text-dark">
            {{ product.brand_name }}
          </span>
        </span>
        <span class="product-description">{{ product.name }}</span>
        <div class="product-price">
          <span>{{ product.price }} SAR </span>
          <span class="discounted-product-price">
            {{
              product.discount ? `${product.discount?.price_before} SAR` : ""
            }}
          </span>
        </div>
      </div>

      <span class="discount-amount-badge" v-show="product.discount">
        {{ product.discount?.amount }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  product: Object,
});
</script>
