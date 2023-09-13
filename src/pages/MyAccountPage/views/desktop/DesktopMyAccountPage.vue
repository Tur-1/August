<script setup>
import {
  Header,
  TabButton,
  TabContent,
  AddressBook,
  AccountSettings,
  MyOrders,
} from "@/pages/MyAccountPage/components";
</script>
<template>
  <section class="container mb-5 mt-5">
    <Header />

    <div
      class="nav nav-tabs d-flex flex-row justify-content-between bg-transparent"
      role="tablist"
      style="flex-wrap: unset !important"
    >
      <TabButton
        targetTab="account-settings"
        icon="bi bi-gear"
        title="Account Settings"
      />
      <TabButton targetTab="my-orders" icon="bi bi-boxes" title="My Orders" />
      <TabButton
        targetTab="address-book"
        icon="bi bi-card-list"
        title="Address Book"
      />
    </div>

    <TabContent targetTab="my-orders">
      <MyOrders />
    </TabContent>
    <TabContent targetTab="account-settings">
      <AccountSettings />
    </TabContent>

    <TabContent targetTab="address-book">
      <AddressBook />
    </TabContent>
  </section>
</template>
