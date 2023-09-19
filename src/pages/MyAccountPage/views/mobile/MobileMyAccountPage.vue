<script setup>
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { useMainOffcanvas } from "@/components/Offcanvas";
import { skeletonLoading } from "@/helpers";
import {
  UserAvatar,
  AccountPageItem,
  AccountSettings,
  AddressBook,
  AccountPageItemSkeleton,
  MyOrders,
  AvatarSkeleton,
} from "@/pages/MyAccountPage/components";

const { logout } = useAuthService();
</script>
<template>
  <section>
    <UserAvatar v-if="!skeletonLoading.isLoading" />
    <AvatarSkeleton v-if="skeletonLoading.isLoading" />
    <ul class="account-items" v-if="!skeletonLoading.isLoading">
      <AccountPageItem
        title="My Orders"
        id="my-orders-offcanvas"
        icon="bi bi-box-seam pb-2 me-2"
        @onClick="useMainOffcanvas.open('my-orders-offcanvas')"
      >
        <MyOrders />
      </AccountPageItem>
      <AccountPageItem
        title="Account Settings"
        icon="bi bi-person-video2 pb-2 me-2"
        id="account-settings-offcanvas"
        @onClick="useMainOffcanvas.open('account-settings-offcanvas')"
      >
        <AccountSettings />
      </AccountPageItem>
      <AccountPageItem
        id="address-book-offcanvas"
        title="Address Book"
        icon="bi bi-geo-alt pb-2 me-2"
        @onClick="useMainOffcanvas.open('address-book-offcanvas')"
      >
        <AddressBook />
      </AccountPageItem>
      <AccountPageItem
        title="Sign out"
        icon="bi bi-box-arrow-left pb-2 me-2"
        @onClick="logout"
      />
    </ul>
    <AccountPageItemSkeleton v-if="skeletonLoading.isLoading" />
  </section>
</template>
