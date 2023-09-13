import { ref } from "vue";

import { defineStore } from 'pinia'




const useAuthUserStore = defineStore('AuthUserStore', () =>
{

    let isAuthenticated = ref(false);
    let user = ref([]);


    const reset = () =>
    {
        user.value = [];
        isAuthenticated.value = false;
    }

    return {
        user,
        reset,
        isAuthenticated,
    }
}, {
    persist: true,
})

export default useAuthUserStore;