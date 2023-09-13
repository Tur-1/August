
import { ref } from "vue";

import { defineStore } from 'pinia'


export const useCouponStore = defineStore('CouponStore', () =>
{

    let code = ref('');
    let message = ref(null);
    let error = ref(false);
    const coupon = ref(null);

    return {
        coupon,
        code,
        message,
        error
    };
});

export default useCouponStore;