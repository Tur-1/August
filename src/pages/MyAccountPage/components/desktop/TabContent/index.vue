<script setup>
import { AccountTabsStore } from "@/pages/MyAccountPage/stores";

const porps = defineProps(["targetTab"]);
</script>
<template>
  <div class="tab-content bg-white shadow-sm mt-2" id="myAccountTabsContent">
    <div
      :class="{ 'show active': AccountTabsStore.id == porps.targetTab }"
      class="tab-pane fade p-3"
      :id="`${porps.targetTab}`"
      role="tabpanel"
      :aria-labelledby="`${porps.targetTab}-tab`"
    >
      <slot />
    </div>
  </div>
</template>
