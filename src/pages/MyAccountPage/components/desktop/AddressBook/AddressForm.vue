<script setup>
import { FormInput, FormStore, BaseForm } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModel";
import useUserAddressService from "@/pages/MyAccountPage/services/useUserAddressService";
import { useAddressStore } from "@/pages/MyAccountPage/stores";

const { storeNewAddress, updateUserAddress, destroyUserAddress } =
  useUserAddressService();
const AddressStore = useAddressStore();
</script>
<template>
  <!-- Modal -->
  <BaseModal
    id="account-address-modal"
    :title="AddressStore.editMode ? 'update address' : 'new address'"
    @closeModal="useBaseModel.close('account-address-modal')"
  >
    <BaseForm
      @onCancel="useBaseModel.close('account-address-modal')"
      @onSubmit="
        AddressStore.editMode ? updateUserAddress() : storeNewAddress()
      "
    >
      <FormInput
        label="Full Name *"
        type="text"
        id="full_name"
        v-model="FormStore.fields.full_name"
        :error="FormStore.errors.full_name"
      />
      <FormInput
        label="address *"
        type="text"
        id="address"
        v-model="FormStore.fields.address"
        :error="FormStore.errors.address"
      />
      <FormInput
        label="city *"
        type="text"
        id="city"
        v-model="FormStore.fields.city"
        :error="FormStore.errors.city"
      />
      <FormInput
        label="street *"
        type="text"
        id="street"
        v-model="FormStore.fields.street"
        :error="FormStore.errors.street"
      />
      <FormInput
        label="phone number *"
        type="number"
        id="phone_number"
        v-model="FormStore.fields.phone_number"
        :error="FormStore.errors.phone_number"
      />
    </BaseForm>
  </BaseModal>

  <ConfirmModal
    @onConfirm="destroyUserAddress"
    @onCancel="useConfirmModal.close()"
  />
</template>
