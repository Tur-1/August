import { reactive, ref } from "vue";

import { defineStore } from 'pinia'
const useWishlistStore = defineStore('WishlistStore', () =>
{

    const products = reactive([]);
    const counter = ref(0);

    const increaseCounter = () =>
    {
        counter.value += 1;
    }
    const decreaseCounter = () =>
    {
        counter.value -= 1;
    }
    return {
        decreaseCounter,
        increaseCounter,
        products,
        counter,
    };
})

export default useWishlistStore;