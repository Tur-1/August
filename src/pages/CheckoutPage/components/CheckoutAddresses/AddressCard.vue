<template>
  <div
    class="card p-2 pe-3 pb-0 mb-3 w-100"
    v-for="(address, index) in addressStore.addresses"
    :key="address.address_id"
  >
    <div class="d-flex align-items-center justify-content-between pb-2 w-100">
      <label
        class="form-check-label d-flex align-items-center"
        :for="`address_label-${address.address_id}`"
        style="width: 90%"
      >
        <div class="form-check align-self-start">
          <input
            class="form-check-input"
            type="radio"
            name="address_id"
            :value="address.address_id"
            v-model="CheckoutStore.address_id"
            :id="`address_label-${address.address_id}`"
          />
        </div>
        <div class="d-flex flex-column ms-3">
          {{ address.full_name }}
          <span class="text-secondary" style="font-size: 11px">
            {{ address.phone_number }}
          </span>
          <div class="row text-dark">
            <span> {{ address.city }} </span>
            <span> {{ address.address }} </span>
            <span> {{ address.street }} </span>
          </div>
        </div>
      </label>

      <div
        style="width: 20%"
        class="d-flex justify-content-end align-self-start"
      >
        <AddressCardActions
          @onEdit="editAddress(address)"
          @onDelete="
            openConfirmModal({
              address_id: address.address_id,
              index: index,
            })
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";
import { AddressCardActions } from "@/pages/MyAccountPage/components";
import { useCheckoutStore } from "@/pages/CheckoutPage/stores";
import { useAddressStore } from "@/pages/MyAccountPage/stores";
const CheckoutStore = useCheckoutStore();
const addressStore = useAddressStore();
const { openConfirmModal, editAddress } = useUserAddressService();
defineEmits(["onEdit", "onDelete"]);
</script>

<script setup></script>
