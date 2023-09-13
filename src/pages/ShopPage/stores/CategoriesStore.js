import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useCategoriesStore = defineStore('CategoriesStore', () =>
{
    const isLoading = ref(false);
    const category = reactive([]);
    const categoryChildren = reactive([]);
    const parentCategory = reactive([]);
    const parentsCategory = reactive([]);
    const categories = reactive([]);
    const parentChildren = reactive([]);

    function showLoading()
    {
        isLoading.value = true;
    }

    function hideLoading() 
    {
        isLoading.value = false;
    }
    return {
        showLoading,
        hideLoading,
        isLoading,
        category,
        categoryChildren,
        parentCategory,
        categories,
        parentsCategory,
        parentChildren
    };
}, {
    persist: {
        paths: ['category'],
    },
})

export default useCategoriesStore;