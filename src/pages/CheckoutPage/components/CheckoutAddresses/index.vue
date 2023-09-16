<script setup>
import {
  NewAddressButton,
  AddressForm,
} from "@/pages/MyAccountPage/components";

import { skeletonLoading } from "@/helpers";
import {
  AddressCard,
  AddressCardSkeleton,
} from "@/pages/CheckoutPage/components";
</script>
<template>
  <NewAddressButton />
  <AddressCard v-if="!skeletonLoading.isLoading" />
  <AddressCardSkeleton v-if="skeletonLoading.isLoading" />

  <AddressForm />
</template>
