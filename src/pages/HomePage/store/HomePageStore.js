

import { reactive, ref } from "vue";

import { defineStore } from 'pinia'
export const useHomePageStore = defineStore('HomePageStore', () =>
{

    const largeBanners = reactive([]);
    const mediumBanners = reactive([]);
    const products = reactive([]);

    return {
        largeBanners,
        mediumBanners,
        products,
    };
})

export default useHomePageStore;