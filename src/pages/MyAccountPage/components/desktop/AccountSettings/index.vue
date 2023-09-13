<script setup>
import AccountInformation from "@/pages/MyAccountPage/components/desktop/AccountSettings/AccountInformation.vue";
import AccountPassword from "@/pages/MyAccountPage/components/desktop/AccountSettings/AccountPassword.vue";
import AccountPhoneNumber from "@/pages/MyAccountPage/components/desktop/AccountSettings/AccountPhoneNumber.vue";
</script>
<template>
  <div class="row g-5">
    <div class="col-md-7">
      <AccountInformation />
    </div>
    <div class="col-md-5">
      <AccountPassword />
      <AccountPhoneNumber />
    </div>
  </div>
</template>
