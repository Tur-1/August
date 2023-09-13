import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useProductsStore = defineStore('ProductsStore', () =>
{
    const count = ref(0);
    const isLoading = ref(false);
    const products = reactive([]);
    const pagination = reactive([]);
    const total = ref(0);

    function showLoading()
    {
        isLoading.value = true;
    }

    function hideLoading() 
    {
        isLoading.value = false;
    }
    return {
        products,
        pagination,
        showLoading,
        hideLoading,
        isLoading,
        count,
        total
    };
});

export default useProductsStore;