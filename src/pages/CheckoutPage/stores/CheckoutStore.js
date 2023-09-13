
import { ref, reactive } from "vue";

import { defineStore } from 'pinia'


export const useCheckoutStore = defineStore('CheckoutStore', () =>
{

    const userAddresses = reactive([]);
    const products = reactive([]);
    const cartDetails = reactive([]);
    const coupon = reactive([]);
    const couponCode = ref('');
    const address_id = ref(null);
    const setAddress = (address_id) =>
    {
        this.address_id = address_id;
    };


    return {
        setAddress,
        coupon,
        cartDetails,
        address_id,
        userAddresses,
        products,
        couponCode

    };
});

export default useCheckoutStore;