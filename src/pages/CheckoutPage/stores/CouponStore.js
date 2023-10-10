
import { ref } from "vue";

import { defineStore } from 'pinia'


const useCouponStore = defineStore('CouponStore', () =>
{

    let code = ref('');
    let message = ref(null);
    let error = ref(false);
    let coupon = ref(null);

    function clearCode()
    {
        code.value = '';
    }
    function clearMessage()
    {
        message.value = null;
    }
    function setMessage(value)
    {
        message.value = value;
    }
    function setCoupon(coupon)
    {
        error.value = false;
        coupon.value = coupon;
    }
    return {
        coupon,
        code,
        message,
        error,
        clearMessage,
        setMessage,
        clearCode,
        setCoupon
    };
});

export default useCouponStore;