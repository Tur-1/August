<script setup>
import { AvatarSkeleton } from "@/pages/MyAccountPage/components";
import { useAddressStore } from "@/pages/MyAccountPage/stores";
import avatar_male from "@/assets/images/avatars/avatar_male.png";
import avatar_female from "@/assets/images/avatars/avatar_female.png";

import { useAuthUserStore } from "@/pages/AuthPage/stores";

const userStore = useAuthUserStore();
const addressStore = useAddressStore();
</script>

<template>
  <div class="account-image-wrap" v-if="!addressStore.isLoading">
    <div class="account-image" v-once="userStore.user?.gender">
      <img
        :src="userStore.user?.gender == 'Female' ? avatar_female : avatar_male"
        class="rounded-circle"
      />
    </div>
    <div class="account-user-name" v-once="userStore.user?.name">
      <span>Hi,</span><span>{{ userStore.user?.name }}</span>
    </div>
  </div>

  <AvatarSkeleton v-if="addressStore.isLoading" />
</template>
