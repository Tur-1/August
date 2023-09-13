import api from "@/api"



export default {
    getCheckoutContent()
    {
        return api().get('checkout');
    },
    applyCoupon(code)
    {
        return api().post(`checkout/apply-coupon`, { code: code });
    },
    buyNow(address_id)
    {
        return api().post(`checkout/buy-now`, { address_id: address_id });
    }

}