<template>
  <div class="col-lg-7">
    <div class="card border-0 bg-white mb-3">
      <div class="card-body" style="font-size: 16px; font-weight: 600">
        <div class="d-flex justify-content-between mb-2 placeholder-wave">
          <div class="d-flex placeholder-wave w-25">
            <span class="text-uppercase placeholder w-25 me-2"></span>
            <span class="text-uppercase placeholder w-75"></span>
          </div>
          <span class="text-uppercase placeholder w-25"></span>
        </div>
        <div class="d-flex justify-content-between mb-2 placeholder-wave">
          <div class="d-flex placeholder-wave w-25">
            <span class="text-uppercase placeholder w-25 me-2"></span>
            <span class="text-uppercase placeholder w-75"></span>
          </div>
          <span class="text-uppercase placeholder w-25"></span>
        </div>
      </div>
    </div>
    <div class="card mt-3 mb-4">
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0 rounded">
          <thead class="thead-light placeholder-wave">
            <tr>
              <th class="border-0">#</th>
              <th class="border-0">name</th>
              <th class="border-0">brand</th>
              <th class="border-0">size</th>
              <th class="border-0">price</th>
              <th class="border-0">quantity</th>
              <th class="border-0">total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" style="font-size: 13px">
              <td clss="placeholder-wave">
                <a
                  href="#"
                  class="d-flex align-items-center rounded placeholder"
                  style="width: 70px; height: 100px"
                >
                </a>
              </td>
              <td>
                <span class="placeholder col-12" />
              </td>
              <td>
                <span class="placeholder col-12" />
              </td>
              <td>
                <span class="placeholder col-12" />
              </td>
              <td>
                <span class="placeholder col-12" />
              </td>
              <td>
                <span class="placeholder col-12" />
              </td>
              <td>
                <span class="placeholder col-12" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card border-0 bg-white">
      <div class="border-bottom text-start">
        <span class="m-2 placeholder col-3"></span>
      </div>

      <div class="card-body p-0">
        <ul class="list-group ist-group-flush">
          <li
            v-for="i in 5"
            class="list-group-item d-flex justify-content-between border-0 placeholder-wave"
          >
            <span class="text-center placeholder col-3"></span>
            <span class="product-subtotal placeholder col-2" colspan="2">
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { useOrdersStore } from "@/pages/MyAccountPage/stores";
import defultImage from "@/assets/images/defult-card-image.png";
import { useRoute } from "vue-router";

const orderStore = useOrdersStore();
const route = useRoute();
const { showUserOrder } = useMyAccountService();
onMounted(async () => {
  await showUserOrder(route.params.order_id);
});
</script>
<style scoped>
td {
  vertical-align: middle !important;
  text-align: center;
}
</style>
