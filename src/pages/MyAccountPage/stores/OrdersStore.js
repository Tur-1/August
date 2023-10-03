

import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useOrdersStore = defineStore('OrdersStore', () =>
{

    let orders = reactive([]);
    let order = reactive([]);
    function reset()
    {
        orders = reactive([]);
        order = reactive([]);
    }

    return {
        reset,
        orders,
        order
    };
});




export default useOrdersStore;