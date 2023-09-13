

import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useOrdersStore = defineStore('OrdersStore', () =>
{

    const orders = reactive([]);
    const order = reactive([]);


    return {

        orders,
        order
    };
});

export default useOrdersStore;