

import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


const useBrandsStore = defineStore('BrandsStore', () =>
{
    const isLoading = ref(false);
    const brands = reactive([]);

    return {
        isLoading,
        brands
    };
});

export default useBrandsStore;