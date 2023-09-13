<template>
  <section>
    <div class="breadcrumb-wrap placeholder-wave" style="height: 40px">
      <div class="placeholder w-100 h-100"></div>
    </div>
    <div class="container product-detail-container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active placeholder-wave">
                <span
                  class="d-block placeholder w-100 rounded-1"
                  style="height: 400px"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 product-deatil-information placeholder-wave"
        >
          <div class="product-detail-info">
            <div class="product-detail-brand">
              <h4 class="title-detail placeholder w-25 rounded-1"></h4>
              <span
                class="placeholder rounded-1"
                style="width: 60px; height: 60px"
              />
            </div>
            <div class="product-detail-title" price="Kay Cain">
              <span class="placeholder rounded-1 w-50" />
            </div>
            <div class="product-price-wrap mt-3">
              <div
                class="product-detail-price placeholder w-25 rounded-1"
              ></div>
            </div>
            <div class="quality-info">
              <ul class="w-75">
                <li class="mb-2" v-for="i in 3">
                  <span class="placeholder rounded-1 me-2 col-1" />
                  <span class="placeholder rounded-1 col-3" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="attr-size">
              <span
                class="me-3 placeholder rounded-1"
                style="width: 62px; padding: 12px"
              />
              <ul class="size-filter">
                <li class="placeholder" v-for="i in 4">
                  <input
                    type="radio"
                    name="size"
                    class="btn-check placeholder"
                    disabled
                    id="size-1"
                    value="1"
                  />
                  <label class="btn placeholder pe-3 ps-3" for="size-1">
                  </label>
                </li>
              </ul>
            </div>
            <div class="add-product-warp">
              <div class="cart-btn-wrraper">
                <button class="btn btn-primary cart-btn placeholder"></button>
              </div>

              <div class="wishlist-btn-wrraper placeholder rounded-1 p-2 ms-2">
                <span class="btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="related-products-tabs">
        <div class="tabs-description-additionalInfo-reviews">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                v-for="i in 3"
                class="placeholder p-3 ms-2 rounded-1"
                style="width: 88px"
                id="Description-tab"
                data-bs-toggle="tab"
                aria-selected="true"
                role="tab"
              >
              </a>
            </li>
          </ul>
          <div class="tab-content shop_info_tab entry-main-content"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
