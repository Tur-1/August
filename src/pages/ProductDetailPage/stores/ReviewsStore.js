import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useReviewsStore = defineStore('ReviewsStore', () =>
{
    const isLoading = ref(false);
    const reviews = reactive([]);

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
        reviews
    };
});

export default useReviewsStore;