<template>
  <TransitionGroup name="list" tag="div" class="row mb-3">
    <div
      class="col-md-4 mb-3"
      v-for="(address, index) in AddressStore.addresses"
      :key="address.address_id"
    >
      <div
        class="card border-1 shadow-sm"
        style="border-color: rgb(168 168 168 / 18%)"
      >
        <AddressCardHeader>
          <span class="card-title">{{ address.full_name }}</span>
          <AddressCardActions
            @onEdit="editAddress(address)"
            @onDelete="
              openConfirmModal({
                address_id: address.address_id,
                index: index,
              })
            "
          />
        </AddressCardHeader>

        <AddressCardBody :address="address" />
      </div>
    </div>
  </TransitionGroup>

  <NoAddressesFound
    v-if="AddressStore.addresses == 0 && !skeletonLoading.isLoading"
  />
</template>

<script setup>
import { useAddressStore } from "@/pages/MyAccountPage/stores";
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";
import { skeletonLoading } from "@/helpers";
import {
  AddressCardActions,
  AddressCardHeader,
  AddressCardBody,
  NoAddressesFound,
} from "@/pages/MyAccountPage/components";
const AddressStore = useAddressStore();
const { openConfirmModal, editAddress } = useUserAddressService();
defineEmits(["onEdit", "onDelete"]);
</script>
