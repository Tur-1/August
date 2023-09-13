<script setup>
import { AccountTabsStore } from "@/pages/MyAccountPage/stores";

const porps = defineProps(["targetTab", "title", "icon"]);

defineEmits(["onClick"]);
</script>
<template>
  <button
    role="tab"
    @click="AccountTabsStore.openTab(porps.targetTab)"
    :class="{
      active: AccountTabsStore.id == porps.targetTab,
    }"
    class="account-desktop-tabs-btns card w-100 collapse-btn me-1"
    :id="`${porps.targetTab}-tab`"
    data-bs-toggle="tab"
    :data-bs-target="`#${porps.targetTab}`"
  >
    <span class="d-flex flex-row align-items-center">
      <div class="icon-circle">
        <i :class="porps.icon"></i>
      </div>
      {{ porps.title }}
    </span>
  </button>
</template>
