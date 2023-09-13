

import { ref } from "vue";

import { defineStore } from 'pinia'


export const useCartCounterStore = defineStore('CartCounterStore', () =>
{
    const counter = ref(0)

    const increase = () =>
    {

        counter.value += 1;

    }

    const decrease = () =>
    {
        counter.value -= 1;
    }

    const reset = () =>
    {

        counter.value = 0;
    }
    return {
        decrease,
        increase,
        counter,
        reset
    };
});

export default useCartCounterStore;