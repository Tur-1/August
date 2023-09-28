<template>
  <!-- <MobileMyAccountPage v-if="isMobile" />
  <DesktopMyAccountPage v-if="isDesktop" /> -->
  <section>
    <div class="account-image-wrap">
      <div class="account-image">
        <img
          src="/src/assets/images/avatars/avatar_male.png"
          class="rounded-circle"
        />
      </div>
      <div class="account-user-name">
        <span>Hi,</span><span>turki alharbi</span>
      </div>
    </div>
    <!--v-if--><!--v-if-->
    <ul class="account-items">
      <li>
        <button role="button" class="text-dark">
          <i class="bi bi-box-seam pb-2 me-2"></i>
          <div
            class="d-flex justify-content-between align-items-center w-100 border-bottom pb-2"
          >
            <span class="account-item-title">My Orders</span
            ><i class="bi bi-chevron-right"></i>
          </div>
        </button>
      </li>
      <div id="my-orders-offcanvas" class="main-offcanvas right-offcanvas">
        <div class="main-offcanvas-container">
          <div class="main-offcanvas-header">
            <button class="main-offcanvas-header-close-btn" type="button">
              <div><i class="bi bi-arrow-left"></i></div>
              <div><span>My Orders</span></div>
            </button>
          </div>
          <div class="main-offcanvas-body">
            <div class="row p-3">
              <a
                href="/my-account/orders/13"
                class="col-12 col-lg-4 pb-1 bg-transparent mb-4"
                id="order-13"
                ><div class="card shadow-sm p-2">
                  <div class="card-body d-flex justify-content-between">
                    <h5 class="text-dark">order no #13</h5>
                    <span class="text-dark">order details</span>
                  </div>
                </div>
                <div
                  class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
                >
                  <p style="font-size: 10px">26/09/2023 01:46 PM</p>
                  <p>865.78 SAR</p>
                </div></a
              ><a
                href="/my-account/orders/12"
                class="col-12 col-lg-4 pb-1 bg-transparent mb-4"
                id="order-12"
                ><div class="card shadow-sm p-2">
                  <div class="card-body d-flex justify-content-between">
                    <h5 class="text-dark">order no #12</h5>
                    <span class="text-dark">order details</span>
                  </div>
                </div>
                <div
                  class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
                >
                  <p style="font-size: 10px">24/09/2023 05:08 AM</p>
                  <p>608.12 SAR</p>
                </div></a
              ><a
                href="/my-account/orders/11"
                class="col-12 col-lg-4 pb-1 bg-transparent mb-4"
                id="order-11"
                ><div class="card shadow-sm p-2">
                  <div class="card-body d-flex justify-content-between">
                    <h5 class="text-dark">order no #11</h5>
                    <span class="text-dark">order details</span>
                  </div>
                </div>
                <div
                  class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
                >
                  <p style="font-size: 10px">21/09/2023 11:46 AM</p>
                  <p>295.32 SAR</p>
                </div></a
              ><a
                href="/my-account/orders/10"
                class="col-12 col-lg-4 pb-1 bg-transparent mb-4"
                id="order-10"
                ><div class="card shadow-sm p-2">
                  <div class="card-body d-flex justify-content-between">
                    <h5 class="text-dark">order no #10</h5>
                    <span class="text-dark">order details</span>
                  </div>
                </div>
                <div
                  class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
                >
                  <p style="font-size: 10px">21/09/2023 11:43 AM</p>
                  <p>502.96 SAR</p>
                </div></a
              ><a
                href="/my-account/orders/9"
                class="col-12 col-lg-4 pb-1 bg-transparent mb-4"
                id="order-9"
                ><div class="card shadow-sm p-2">
                  <div class="card-body d-flex justify-content-between">
                    <h5 class="text-dark">order no #9</h5>
                    <span class="text-dark">order details</span>
                  </div>
                </div>
                <div
                  class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
                >
                  <p style="font-size: 10px">21/09/2023 05:35 AM</p>
                  <p>846.40 SAR</p>
                </div></a
              >
            </div>
          </div>
          <div class="main-offcanvas-footer"></div>
        </div>
      </div>
      <li>
        <button role="button" class="text-dark">
          <i class="bi bi-person-video2 pb-2 me-2"></i>
          <div
            class="d-flex justify-content-between align-items-center w-100 border-bottom pb-2"
          >
            <span class="account-item-title">Account Settings</span
            ><i class="bi bi-chevron-right"></i>
          </div>
        </button>
      </li>
      <div
        id="account-settings-offcanvas"
        class="main-offcanvas right-offcanvas"
      >
        <div class="main-offcanvas-container">
          <div class="main-offcanvas-header">
            <button class="main-offcanvas-header-close-btn" type="button">
              <div><i class="bi bi-arrow-left"></i></div>
              <div><span>Account Settings</span></div>
            </button>
          </div>
          <div class="main-offcanvas-body">
            <div class="row g-5">
              <div class="col-md-7">
                <div class="row mb-1">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <header
                        class="d-flex justify-content-between mb-2 align-items-center"
                      >
                        <span class="card-title text-dark"
                          ><strong>ACCOUNT INFO </strong></span
                        ><button class="bg-transparent border-0">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                      </header>
                      <div class="text-dark">
                        <p><span class="me-1">Name: </span> turki alharbi</p>
                        <p>
                          <span class="me-1">Email: </span> tur.1i@hotmail.com
                        </p>
                        <p><span class="me-1">Gender: </span> Male</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal --><!--v-if-->
              </div>
              <div class="col-md-5">
                <div class="row mb-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <div wire:id="8MbtLTrynBn0TDd3Bq0P">
                        <header
                          class="d-flex justify-content-between mb-2 align-items-center"
                        >
                          <span class="card-title text-dark"
                            ><strong>PASSWORD</strong></span
                          ><button class="bg-transparent border-0">
                            <i class="bi bi-pencil-square"></i>
                          </button>
                        </header>
                      </div>
                      <input
                        class="w-100 p-2"
                        id="password-field"
                        placeholder="*********"
                        disabled=""
                      />
                    </div>
                  </div>
                </div>
                <!-- Modal --><!--v-if-->
                <div class="row mb-3">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <header
                        class="d-flex justify-content-between mb-2 align-items-center"
                      >
                        <span class="card-title text-dark"
                          ><strong>PHONE NUMBER </strong></span
                        ><button class="bg-transparent border-0">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                      </header>
                      <div class="w-100 text-dark">
                        <p>No phone number saved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal --><!--v-if-->
              </div>
            </div>
          </div>
          <div class="main-offcanvas-footer"></div>
        </div>
      </div>
      <li>
        <button role="button" class="text-dark">
          <i class="bi bi-geo-alt pb-2 me-2"></i>
          <div
            class="d-flex justify-content-between align-items-center w-100 border-bottom pb-2"
          >
            <span class="account-item-title">Address Book</span
            ><i class="bi bi-chevron-right"></i>
          </div>
        </button>
      </li>
      <div id="address-book-offcanvas" class="main-offcanvas right-offcanvas">
        <div class="main-offcanvas-container">
          <div class="main-offcanvas-header">
            <button class="main-offcanvas-header-close-btn" type="button">
              <div><i class="bi bi-arrow-left"></i></div>
              <div><span>Address Book</span></div>
            </button>
          </div>
          <div class="main-offcanvas-body">
            <div class="p-1 mb-4">
              <button class="btn btn-dark d-flex align-items-center m-2">
                <span class="text-bold"
                  ><i class="bi bi-plus-circle"></i> New Address
                </span>
              </button>
            </div>
            <!--v-if--><!--v-if-->
            <div class="row mb-3">
              <div class="col-md-4 mb-3">
                <div
                  class="card border-1 shadow-sm"
                  style="border-color: rgba(168, 168, 168, 0.18)"
                >
                  <div
                    class="card-header bg-white d-flex justify-content-between align-items-center"
                  >
                    <span class="card-title">turki noman alharbi</span>
                    <div class="address_actions p-0">
                      <button class="bg-transparent border-0 btn-sm">
                        <i class="bi bi-pencil-square"></i></button
                      ><span class="border-start m-2"></span
                      ><button class="bg-transparent border-0 btn-sm">
                        <i class="bi bi-trash3"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body d-flex flex-column">
                    <span class="text-secondary" style="font-size: 11px"
                      >1223232323232</span
                    >
                    <div class="row text-dark">
                      <span>المدينة المنورة</span
                      ><span>Alzubair Ibn al Awwam street</span
                      ><span>Alzubair Ibn al Awwam street</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--v-if--><!-- Modal --><!--v-if--><!--v-if-->
          </div>
          <div class="main-offcanvas-footer"></div>
        </div>
      </div>
      <li>
        <button role="button" class="text-dark">
          <i class="bi bi-box-arrow-left pb-2 me-2"></i>
          <div
            class="d-flex justify-content-between align-items-center w-100 border-bottom pb-2"
          >
            <span class="account-item-title">Sign out</span
            ><i class="bi bi-chevron-right"></i>
          </div>
        </button>
      </li>
      <div class="main-offcanvas right-offcanvas">
        <div class="main-offcanvas-container">
          <div class="main-offcanvas-header">
            <button class="main-offcanvas-header-close-btn" type="button">
              <div><i class="bi bi-arrow-left"></i></div>
              <div><span>Sign out</span></div>
            </button>
          </div>
          <div class="main-offcanvas-body"></div>
          <div class="main-offcanvas-footer"></div>
        </div>
      </div>
    </ul>
    <!--v-if-->
  </section>
</template>

<script setup>
import { isDesktop, isMobile } from "@/helpers";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { defineAsyncComponent, onMounted } from "vue";
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";

// const DesktopMyAccountPage = defineAsyncComponent(() =>
//   import("@/pages/MyAccountPage/views/desktop/DesktopMyAccountPage.vue")
// );
// const MobileMyAccountPage = defineAsyncComponent(() =>
//   import("@/pages/MyAccountPage/views/mobile/MobileMyAccountPage.vue")
// );

// const { getUserOrders } = useMyAccountService();
// const { getUserAddresses } = useUserAddressService();

// onMounted(() => {
//   Promise.all([getUserAddresses(), getUserOrders()]);
// });
</script>
