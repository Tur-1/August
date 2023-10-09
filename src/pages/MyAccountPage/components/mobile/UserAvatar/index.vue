<script setup>
import { AvatarSkeleton } from "@/pages/MyAccountPage/components";
import { useAddressStore } from "@/pages/MyAccountPage/stores";
import avatar_male from "@/assets/images/avatars/avatar_male.png";
import avatar_female from "@/assets/images/avatars/avatar_female.png";

import { useAuthUserStore } from "@/pages/AuthPage/stores";
import { computed, ref, watch } from "vue";

const userStore = useAuthUserStore();
const addressStore = useAddressStore();

let userAvatar = ref(avatar_male);

let userGender = computed(() => {
  userStore.user?.gender == "Female"
    ? (userAvatar.value = avatar_female)
    : (userAvatar.value = avatar_male);
});

watch(userGender, (value) => {
  if (value == "Female") {
    userAvatar.value = avatar_female;
  } else {
    userAvatar.value = avatar_male;
  }
});
</script>

<template>
  <div class="account-image-wrap" v-if="!addressStore.isLoading">
    <div class="account-image">
      <img :src="userAvatar" class="rounded-circle" />
    </div>
    <div class="account-user-name">
      <span>Hi,</span><span>{{ userStore.user?.name }}</span>
    </div>
  </div>

  <AvatarSkeleton v-if="addressStore.isLoading" />
</template>
