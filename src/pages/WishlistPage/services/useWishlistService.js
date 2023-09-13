
import { useAuthModalStore, useAuthUserStore } from '@/pages/AuthPage/stores';
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import { isNotNull, skeletonLoading } from '@/helpers';

import useWishlistPageApi from '@/pages/WishlistPage/api/useWishlistPageApi';
import { useWishlistStore } from '@/pages/WishlistPage/stores';
import useRouterStore from '@/router/RouterStore';


export default function useWishlistService()
{
    const authStore = useAuthUserStore();
    const routeService = useRouterStore();
    const wishlistStore = useWishlistStore();

    const getWishlistProducts = async () =>
    {

        skeletonLoading.show();


        try
        {
            let response = await useWishlistPageApi.getUserWishlist();

            wishlistStore.products = response.data.products;
            wishlistStore.counter = wishlistStore.products.length;

        } catch (error)
        {
            routeService.redirectUnauthorizedUser(error);
        }

        skeletonLoading.hide();

    }

    const addProductToWishlist = async ({ product_id, index = 0 }) =>
    {

        if (!authStore.isAuthenticated)
        {
            useAuthModalStore.open();
            return;
        }

        useLoadingSpinner.show();
        let inWishlist;
        try
        {

            let response = await useWishlistPageApi.addToWishlist(product_id);

            inWishlist = response.data.inWishlist;

            if (!inWishlist)
            {
                wishlistStore.products.splice(index, 1);
                wishlistStore.decreaseCounter();
            } else
            {
                wishlistStore.increaseCounter();
            }

        } catch (error)
        {

        }

        useLoadingSpinner.hide();


        return inWishlist;
    }
    return {
        getWishlistProducts,
        addProductToWishlist
    }
}
