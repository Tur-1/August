
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import useCheckoutApi from "@/pages/CheckoutPage/api/useCheckoutApi";
import { useCheckoutStore, useCouponStore } from "@/pages/CheckoutPage/stores";
import { useAddressStore } from "@/pages/MyAccountPage/stores";
import { useCartCounterStore } from "@/pages/ShoppingCartPage/stores";
import useRouterStore from "@/router/RouterStore";

export default function useCheckoutService()
{

    const CheckoutStore = useCheckoutStore();
    const addressStore = useAddressStore();
    const couponStore = useCouponStore();
    const CartCounter = useCartCounterStore();
    const getCheckoutContent = async () =>
    {

        try
        {
            let response = await useCheckoutApi.getCheckoutContent();

            CheckoutStore.products = response.data.products;
            CartCounter.counter = CheckoutStore.products.length;

            addressStore.addresses = response.data.user_addresses;
            CheckoutStore.cartDetails = response.data.cart_details;
            couponStore.code = '';
            couponStore.message = null;
            couponStore.coupon = null;
        } catch (error)
        {

        }
    }

    const applyCoupon = async () =>
    {

        useLoadingSpinner.show();


        try
        {
            let response = await useCheckoutApi.applyCoupon(couponStore.code);

            CheckoutStore.cartDetails = response.data.cartDetails;
            couponStore.coupon = response.data.cartDetails.coupon;
            couponStore.error = false;
            couponStore.message = response.data.message;

            if (couponStore.coupon == null)
            {
                couponStore.code = '';
                couponStore.message = null;
            }

        } catch (error)
        {

            if (error && error.response?.status == 404)
            {
                couponStore.error = true;
                couponStore.message = error.response.data.message;

            }

        }

        useLoadingSpinner.hide();

    }

    const buyNow = async () =>
    {

        useLoadingSpinner.show();

        const routeService = useRouterStore();
        try
        {
            let response = await useCheckoutApi.buyNow(CheckoutStore.address_id);

            useToastNotification.open().withMessage(response.data.message);
            CartCounter.counter = 0;
            routeService.redirectToRoute('home');
        } catch (error)
        {

            if (error && error.response.status == 404)
            {
                useToastNotification.open({ error: true })
                    .withMessage(error.response.data.message);
                await getCheckoutContent();
            }

        }

        useLoadingSpinner.hide();
    }
    return {
        getCheckoutContent,
        applyCoupon,
        buyNow
    }
}