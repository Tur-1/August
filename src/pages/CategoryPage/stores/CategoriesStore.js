import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


const useCategoriesStore = defineStore('CategoriesStore', () =>
{

    let category = reactive([]);
    let categoryChildren = reactive([]);
    let parentCategory = reactive([]);
    let parentsCategory = reactive([]);
    let categories = reactive([]);
    let parentChildren = reactive([]);

    function reset()
    {
        category = reactive([]);
        categoryChildren = reactive([]);
        parentCategory = reactive([]);
        parentsCategory = reactive([]);
        categories = reactive([]);
        parentChildren = reactive([]);

    }


    return {
        category,
        categoryChildren,
        parentCategory,
        categories,
        parentsCategory,
        parentChildren,
        reset
    };
}, {
    persist: {
        paths: ['category'],
    },
})

export default useCategoriesStore;