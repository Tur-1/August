<script setup>
import { FormStore, BaseForm } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import ErrorMessage from "@/components/ErrorMessage/index.vue";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { useAuthUserStore } from "@/pages/AuthPage/stores";

const userStore = useAuthUserStore();
const { updateMyPhoneNumber } = useMyAccountService();

const openModal = () => {
  FormStore.clearErrors();
  useBaseModel.open("account-phone-number-modal");
  FormStore.setFields({
    phone_number: userStore.user?.phone_number,
  });
};
</script>
<template>
  <div class="row mb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark"
            ><strong>PHONE NUMBER </strong></span
          >
          <button class="bg-transparent border-0" @click="openModal">
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="w-100 text-dark">
          <p>
            {{ userStore.user?.phone_number ?? "No phone number saved" }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <BaseModal
    id="account-phone-number-modal"
    title="update phone number"
    @closeModal="useBaseModel.close('account-phone-number-modal')"
  >
    <BaseForm
      @onCancel="useBaseModel.close('account-phone-number-modal')"
      @onSubmit="updateMyPhoneNumber"
    >
      <div class="mb-3">
        <div class="input-group input-group-sm">
          <span
            class="input-group-text d-flex justify-content-between"
            id="basic-addon1"
          >
            <img
              src="https://flagcdn.com/w20/sa.png"
              srcset="https://flagcdn.com/w40/sa.png 2x"
              width="25"
              alt="Saudi Arabia"
            />
            <span>+966</span>
          </span>
          <input
            class="form-control form-control-sm"
            id="phone_number"
            type="tel"
            v-model="FormStore.fields.phone_number"
            placeholder="51 234 5678"
          />
        </div>
        <ErrorMessage
          v-for="error in FormStore.errors.phone_number"
          :message="error"
        />
      </div>
    </BaseForm>
  </BaseModal>
</template>
