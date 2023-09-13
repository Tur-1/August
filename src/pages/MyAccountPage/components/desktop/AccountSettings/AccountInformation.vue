<script setup>
import {
  FormInput,
  FormStore,
  FormSelect,
  BaseForm,
} from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";

import { useAuthUserStore } from "@/pages/AuthPage/stores";

const userStore = useAuthUserStore();
const { updateUserInformation } = useMyAccountService();

const openModal = () => {
  FormStore.clearErrors();
  useBaseModel.open("account-info-modal");
  FormStore.setFields({
    name: userStore.user?.name,
    email: userStore.user?.email,
    gender: userStore.user?.gender,
  });
};
</script>
<template>
  <div class="row mb-1">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark">
            <strong>ACCOUNT INFO </strong>
          </span>
          <button class="bg-transparent border-0" @click="openModal">
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="text-dark">
          <p>
            <span class="me-1">Name: </span>
            {{ userStore.user.name }}
          </p>
          <p>
            <span class="me-1">Email: </span>
            {{ userStore.user.email }}
          </p>
          <p>
            <span class="me-1">Gender: </span>
            {{ userStore.user.gender }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <BaseModal
    id="account-info-modal"
    title="update account information"
    @closeModal="useBaseModel.close('account-info-modal')"
  >
    <BaseForm
      @onCancel="useBaseModel.close('account-info-modal')"
      @onSubmit="updateUserInformation"
    >
      <FormInput
        label="Name *"
        type="text"
        placeholder="name"
        id="accountName"
        v-model="FormStore.fields.name"
        :error="FormStore.errors.name"
      />

      <FormInput
        label="Email *"
        type="email"
        placeholder="email"
        v-model="FormStore.fields.email"
        :error="FormStore.errors.email"
      />

      <FormSelect
        label="Gender *"
        v-model="FormStore.fields.gender"
        :error="FormStore.errors.gender"
        id="accountGender"
        :options="['Male', 'Female']"
      />
    </BaseForm>
  </BaseModal>
</template>
