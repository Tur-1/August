<script setup>
import { FormInput, FormStore, BaseForm } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";

const { updateMyAccountPassword } = useMyAccountService();

const openModal = () => {
  FormStore.clearErrors();
  useBaseModel.open("account-password-modal");
  FormStore.setFields({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
};
</script>

<template>
  <div class="row mb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <div wire:id="8MbtLTrynBn0TDd3Bq0P">
          <header
            class="d-flex justify-content-between mb-2 align-items-center"
          >
            <span class="card-title text-dark"><strong>PASSWORD</strong></span>
            <button class="bg-transparent border-0" @click="openModal">
              <i class="bi bi-pencil-square"></i>
            </button>
          </header>
        </div>

        <input class="w-100 p-2" placeholder="*********" disabled="" />
      </div>
    </div>
  </div>
  <!-- Modal -->
  <BaseModal
    id="account-password-modal"
    title="update account password"
    @closeModal="useBaseModel.close('account-password-modal')"
  >
    <BaseForm
      @onCancel="useBaseModel.close('account-password-modal')"
      @onSubmit="updateMyAccountPassword"
    >
      <FormInput
        label="current password *"
        type="password"
        id="current_password"
        v-model="FormStore.fields.current_password"
        :error="FormStore.errors.current_password"
      />

      <FormInput
        label="new password *"
        type="password"
        id="accountNewPassword"
        v-model="FormStore.fields.new_password"
        :error="FormStore.errors.new_password"
      />
      <FormInput
        label="confirm new password *"
        type="password"
        id="confirmNewPassword"
        v-model="FormStore.fields.new_password_confirmation"
        :error="FormStore.errors.new_password_confirmation"
      />
    </BaseForm>
  </BaseModal>
</template>
