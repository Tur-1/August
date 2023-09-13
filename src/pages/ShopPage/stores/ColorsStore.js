import { reactive, ref } from "vue";

import { defineStore } from 'pinia'
export const useColorsStore = defineStore('ColorsStore', () =>
{
    const isLoading = ref(false);
    const colors = reactive([]);


    return {
        colors,
        isLoading
    };
})

export default useColorsStore;