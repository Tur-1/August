import { reactive, ref } from "vue";

import { defineStore } from 'pinia'
export const useSizesStore = defineStore('SizesStore', () =>
{
    const isLoading = ref(false);
    const sizes = reactive([]);


    return {
        sizes,
        isLoading
    };
})

export default useSizesStore;