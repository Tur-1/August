<script setup>
import { useOrdersStore } from "@/pages/MyAccountPage/stores";
import { onBeforeMount } from "vue";
const ordersStore = useOrdersStore();
</script>
<template>
  <div class="row p-3">
    <Link
      v-for="(order, index) in ordersStore.orders"
      class="col-12 col-lg-4 pb-1 bg-transparent mb-4"
      :to="{ name: 'orderPage', params: { order_id: order.id } }"
      :id="'order-' + order.id"
    >
      <div class="card shadow-sm p-2">
        <div class="card-body d-flex justify-content-between">
          <h5 class="text-dark">order no #{{ order.id }}</h5>
          <span class="text-dark">order details</span>
        </div>
      </div>
      <div
        class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
      >
        <p style="font-size: 10px">{{ order.date }}</p>
        <p>{{ order.total }} SAR</p>
      </div>
    </Link>
  </div>
</template>
