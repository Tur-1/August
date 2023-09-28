<script setup>
import { skeletonLoading } from "@/helpers";
import BannersSkeleton from "@/pages/HomePage/components/BannersSkeleton.vue";
import LargeBanners from "@/pages/HomePage/components/LargeBanners.vue";
import LatestProducts from "@/pages/HomePage/components/LatestProducts.vue";
import MediumBanners from "@/pages/HomePage/components/MediumBanners.vue";
import useHomePageService from "@/pages/HomePage/services/useHomePageService";
import { onMounted } from "vue";

const { getLatestProducts, getBanners } = useHomePageService();
onMounted(() => {
  Promise.all([getLatestProducts(), getBanners()]);
});
</script>
<template>
  <section class="container">
    <div class="home-large-banners">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item w-100 h-100 active">
            <a
              aria-current="page"
              href="/#"
              class="router-link-active router-link-exact-active"
              ><img
                src="/augustbanners/1694829757-1672949301-slide_1.webp"
                class="d-block w-100 h-100"
                alt="..."
            /></a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span
          ><span class="visually-hidden">Previous</span></button
        ><button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span
          ><span class="visually-hidden">Next</span>
        </button>
      </div>
      <!--v-if-->
    </div>
    <div class="home-medium-banners">
      <div class="mb-3">
        <a href="#"
          ><img
            src="/augustbanners/1694829774-1672951891-module_01_en_3.webp"
            class="w-100"
            alt="..."
        /></a>
      </div>
      <div class="mb-3">
        <a href="#"
          ><img
            src="/augustbanners/1694829788-1672951901-module_01_en_2.webp"
            class="w-100"
            alt="..."
        /></a>
      </div>
      <div class="mb-3">
        <a href="#"
          ><img
            src="/augustbanners/1694829814-1691857899-module_01_en.webp"
            class="w-100"
            alt="..."
        /></a>
      </div>
      <!--v-if-->
    </div>
    <div class="row mt-3">
      <h5 class="section-title"><span>New</span> Arrivals</h5>
      <div class="base-slider">
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
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
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/nsw-icon-futura-t-shirt"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_12/1695181580-1-mobile-web-cataloggfggdllg.png"
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
              ><span class="product-description">Nsw Icon Futura T-Shirt</span>
              <div class="product-price">
                <span>167.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/mesh-back-t-shirt"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_11/1695181402-5-web-desktop-list.png"
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
                ><span class="text-wrap text-dark">Addidas</span></span
              ><span class="product-description">Mesh-Back T-Shirt</span>
              <div class="product-price">
                <span>136.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/adicolor-3-stripe-classics-t-shirt"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_10/1695181052-1-mobile-web-cataloggddfdf.png"
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
                <span>230.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/logo-toiletry-bag"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_9/1695116982-1-mobile-web-catalogdofgjdfkg.png"
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
                ><span class="text-wrap text-dark">Levi's®</span></span
              ><span class="product-description">Logo Toiletry Bag</span>
              <div class="product-price">
                <span>365.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/205814fll60ku-oversize-sunglasses"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_8/1695117606-1-mobile-web-catalogefsff.png"
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
              ><span class="product-description"
                >205814Fll60Ku Oversize Sunglasses</span
              >
              <div class="product-price">
                <span>488.70 SAR </span
                ><span class="discounted-product-price">543.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">10 %OFF</span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/charged-assert-10"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_7/1695117442-1-mobile-web-catalogsdfddfdfd.png"
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
              ><span class="product-description">Charged Assert 10</span>
              <div class="product-price">
                <span>342.00 SAR </span
                ><span class="discounted-product-price"></span>
              </div>
            </div>
            <span class="discount-amount-badge" style="display: none"></span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a href="/product-detail/ultraboost-10" class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_6/1695117316-1-mobile-web-cataloggdgdfdfd.png"
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
                ><span class="text-wrap text-dark">Addidas</span></span
              ><span class="product-description">Ultraboost 1.0</span>
              <div class="product-price">
                <span>648.55 SAR </span
                ><span class="discounted-product-price">763.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">15 %OFF</span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/air-force-1-07-an21"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_5/1695117206-1-mobile-web-catalogefsfsfsfsfdfs.png"
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
              ><span class="product-description">Air Force 1 '07 An21</span>
              <div class="product-price">
                <span>523.20 SAR </span
                ><span class="discounted-product-price">654.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">20 %OFF</span>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-5 product-item mb-4">
          <div class="card product-card">
            <a
              href="/product-detail/classic-bos-backpack"
              class="product-card-image"
              ><img
                loading="lazy"
                src="/products/product_4/1695111675-1-mobile-web-sfscatalog.png"
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
              ><span class="product-description">Classic Bos Backpack</span>
              <div class="product-price">
                <span>207.00 SAR </span
                ><span class="discounted-product-price">230.00 SAR</span>
              </div>
            </div>
            <span class="discount-amount-badge">10 %OFF</span>
          </div>
        </div>
        <!--v-if--><!--v-if-->
      </div>
    </div>
  </section>

  <!-- <section class="container">
    <div class="home-large-banners">
      <LargeBanners v-if="!skeletonLoading.isLoading" />

      <BannersSkeleton v-if="skeletonLoading.isLoading" />
    </div>
    <div class="home-medium-banners">
      <MediumBanners v-if="!skeletonLoading.isLoading" />

      <BannersSkeleton v-for="i in 3" v-if="skeletonLoading.isLoading" />
    </div>

    <LatestProducts />
  </section> -->
</template>
