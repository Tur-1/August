

<script setup>
import useAuthService from "@/pages/AuthPage/services/useAuthService";
import { onMounted } from "vue";
const {authService} = useAuthService();

onMounted(authService);
</script>

<template>
    <div>

    </div>
</template>