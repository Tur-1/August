<script setup>
import { watch, onMounted } from "vue";
import useCategoryPageService from "@/pages/CategoryPage/services/useCategoryPageService";
import { useRoute, useRouter } from "vue-router";
import ProductsFilterStore from "@/pages/CategoryPage/stores/ProductsFilterStore";
import getRouteQueryString from "@/pages/CategoryPage/helpers/getRouteQueryString";
import { isDesktop, isMobile } from "@/helpers";
import { defineAsyncComponent } from "vue";

// const CategoryPageDesktop = defineAsyncComponent(() =>
//   import("@/pages/CategoryPage/views/desktop/CategoryPageDesktop.vue")
// );
// const CategoryPageMobile = defineAsyncComponent(() =>
//   import("@/pages/CategoryPage/views/mobile/CategoryPageMobile.vue")
// );
// const route = useRoute();
// const router = useRouter();
// const { getCategory, getProducts, getColors } = useCategoryPageService();

// onMounted(() => {
//   getRouteQueryString(route.query);
//   Promise.all([
//     getColors(),
//     getProducts({ query: route.query }),
//     getCategory(),
//   ]);
// });

// watch(
//   () => ProductsFilterStore,
//   (value) => {
//     router.push({
//       query: {
//         color: value.color,
//         brand: value.brand,
//         size: value.size,
//         sort: value.sort,
//       },
//     });
//   },
//   { deep: true }
// );
</script>
<template>
  <section class="shop-page-mobile-section">
    <div class="mobile-shop-page-header">
      <div class="col">
        <button class="sort-filter-btns" type="button">
          <span>sort</span>
        </button>
      </div>
      <!--v-if-->
      <div class="col border-start">
        <button
          class="sort-filter-btns"
          type="button"
          id="mobile-offcanvas-filter-btn"
        >
          <i class="bi bi-funnel-fill"></i><span>Filter</span>
        </button>
      </div>
      <!--teleport start--><!--teleport end-->
    </div>
    <div class="mobile-header-categories-warp">
      <div class="mobile-categories-row mb-1">
        <div class="category-swiper-slide">
          <a
            href="/categories/men-clothing"
            class="router-link-active router-link-exact-active category-link active-category-link"
            aria-current="page"
            >All</a
          >
        </div>
        <div class="category-swiper-slide">
          <a
            href="/categories/men-clothing-hoodies_sweatshirts"
            class="category-link"
            >Hoodies &amp; Sweatshirts</a
          >
        </div>
        <div class="category-swiper-slide">
          <a
            href="/categories/men-clothing-t_shirt_visits"
            class="category-link"
            >T-Shirt &amp; Visits</a
          >
        </div>
        <div class="category-swiper-slide">
          <a href="/categories/men-clothing-pants_chinos" class="category-link"
            >Pants &amp; Chinos</a
          >
        </div>
        <div class="category-swiper-slide">
          <a href="/categories/men-clothing-jeans" class="category-link"
            >Jeans</a
          >
        </div>
        <!--v-if--><!--v-if-->
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/airflex-light-wash-slim-fit-jeans"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_22/1695182727-1-mobile-web-catalogspkrgd;l.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">American Eagle</span></span
              ><span class="product-description"
                >Airflex+ Light Wash Slim Fit Jeans</span
              >
              <div class="product-price">
                <span>256.80 SAR </span
                ><span class="discounted-product-price">321.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">20 %OFF</span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/essential-logo-fleece-sweatpants"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_21/1695182590-1-mobile-web-catalogfsfsfsfsds.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Puma</span></span
              ><span class="product-description"
                >Essential Logo Fleece Sweatpants</span
              >
              <div class="product-price">
                <span>136.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/nsw-repeat-swoosh-fleece-cargo"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_20/1695182498-1-mobile-web-catalogddfgpo.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Nike</span></span
              ><span class="product-description"
                >Nsw Repeat Swoosh Fleece Cargo</span
              >
              <div class="product-price">
                <span>233.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/chicago-bulls-essential-fleece-hoodie"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_19/1695182285-1-mobile-web-catalodgdfgdg.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Nike</span></span
              ><span class="product-description"
                >Chicago Bulls Essential Fleece Hoodie</span
              >
              <div class="product-price">
                <span>368.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/air-fleece-sweatshirt"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_18/1695182215-1-mobile-web-catalogdflkgdf.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Nike</span></span
              ><span class="product-description">Air Fleece Sweatshirt</span>
              <div class="product-price">
                <span>463.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/logo-crew-neck-sweatshirt"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_17/1695182121-1-mobile-web-catalogdflgkdflfgjdflgd.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Calvin Klein</span></span
              ><span class="product-description"
                >Logo Crew Neck Sweatshirt</span
              >
              <div class="product-price">
                <span>392.40 SAR </span
                ><span class="discounted-product-price">436.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">10 %OFF</span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/essential-sweatshirt"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_16/1695181996-1-mobile-web-cataloglskdfflsks.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Tommy Hilfiger</span></span
              ><span class="product-description">Essential Sweatshirt</span>
              <div class="product-price">
                <span>289.85 SAR </span
                ><span class="discounted-product-price">341.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">15 %OFF</span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/teamgoal-23-causals-hoodie"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_15/1695181895-1-mobile-web-cataloglfjdldfddf.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Puma</span></span
              ><span class="product-description"
                >Teamgoal 23 Causals Hoodie</span
              >
              <div class="product-price">
                <span>380.70 SAR </span
                ><span class="discounted-product-price">423.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">10 %OFF</span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/project-rock-iron-muscle-tank"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_14/1695181754-1-mobile-web-catalogsgrdfljgdf.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Under Armour</span></span
              ><span class="product-description"
                >Project Rock Iron Muscle Tank</span
              >
              <div class="product-price">
                <span>356.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4 col-6 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/adicolor-3-stripe-classics-t-shirt-pJ-88-s"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_13/1695181677-1-mobile-web-catalogfgdfgdgd.png"
                class="card-img-top"
                alt="."
              /><span
                class="product-card-out-of-stock out-of-stock-bg p-1"
                style="display: none"
              >
                out of stock
              </span></a
            ><button
              type="button"
              tabindex="-1"
              class="wishlist-btn text-center"
            >
              <svg
                class="wishlist-icon"
                xmlns="http://www.w3.org/2000/svg"
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
              <span class="product-title"
                ><span class="text-wrap text-dark">Adidas Originals</span></span
              ><span class="product-description"
                >Adicolor 3 Stripe Classics T-Shirt</span
              >
              <div class="product-price">
                <span>242.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <!--v-if--><!--v-if-->
        <div class="d-flex justify-content-center mt-5 mb-3">
          <div class="mobile-pagination">
            <a class="page-link me-5 hidden" role="button"
              ><i
                class="bi bi-chevron-left"
                style="font-size: 20px !important"
              ></i
            ></a>
            <div><strong>PAGE 1</strong></div>
            <a class="page-link ms-5" role="button"
              ><i
                class="bi bi-chevron-right"
                style="font-size: 20px !important"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <CategoryPageDesktop v-if="isDesktop" />
  <CategoryPageMobile v-if="isMobile" /> -->
</template>
