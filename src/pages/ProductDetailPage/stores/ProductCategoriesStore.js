import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useProductCategoriesStore = defineStore('ProductCategoriesStore', () =>
{
    const isLoading = ref(false);
    const categories = reactive([]);

    const showLoading = () =>
    {
        isLoading.value = true;
    }

    const hideLoading = () =>
    {
        isLoading.value = false;
    }
    return {
        showLoading,
        hideLoading,
        isLoading,
        categories
    };
});

export default useProductCategoriesStore;