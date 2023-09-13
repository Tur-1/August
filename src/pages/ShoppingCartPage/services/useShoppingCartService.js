
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useShoppingCartApi from "@/pages/ShoppingCartPage/api/useShoppingCartApi";
import { useCartCounterStore, CartStore } from "@/pages/ShoppingCartPage/stores";

export default function useShoppingCartService()
{
    const CartCounter = useCartCounterStore();
    const getCartCount = async () =>
    {

        let res = await useShoppingCartApi.getCartCount();

        CartCounter.counter = res.data.cartCounter;

    }
    const getCartProducts = async () =>
    {

        try
        {
            let response = await useShoppingCartApi.getCartProducts();

            CartStore.items = response.data.cart_items;
            CartStore.cartDetails = response.data.cart_details;
            CartCounter.counter = CartStore.items.length;
        } catch (error)
        {
        }

    }
    const removeCartItem = async ({ item_id, index }) =>
    {

        useLoadingSpinner.show();
        try
        {

            let response = await useShoppingCartApi.removeCartItem(item_id);

            CartStore.items.splice(index, 1);

            await getCartProducts();
        } catch (error)
        {

        }

        useLoadingSpinner.hide();
    }
    const moveToWishlist = async ({ product_id, cart_item_id, index }) =>
    {
        useLoadingSpinner.show();

        try
        {

            let response = await useShoppingCartApi.moveToWishlist({
                product_id: product_id,
                cart_item_id: cart_item_id
            });

            CartStore.items.splice(index, 1);

            await getCartProducts();
        } catch (error)
        {

        }


        useLoadingSpinner.hide();
    }
    const incrementItemQuantity = async (cart_item_id) =>
    {
        if (isStockSizeLessThanQty(cart_item_id)) return;

        useLoadingSpinner.show();
        try
        {

            await useShoppingCartApi.incrementItemQuantity(cart_item_id);

            await getCartProducts();
        } catch (error)
        {

        }

        useLoadingSpinner.hide();
    }
    const decrementItemQuantity = async (cart_item_id) =>
    {

        if (isQuantityLessThanZero(cart_item_id)) return;

        useLoadingSpinner.show();
        try
        {
            await useShoppingCartApi.decrementItemQuantity(cart_item_id);

            await getCartProducts();
        } catch (error)
        {

        }
        useLoadingSpinner.hide();
    }

    const isStockSizeLessThanQty = (cart_item_id) =>
    {

        let item = getCartItem(cart_item_id);

        if (item.size.stock <= item.quantity)
        {
            return true;
        }
        return false;
    }
    const isQuantityLessThanZero = (cart_item_id) =>
    {
        let item = getCartItem(cart_item_id);

        if (item.quantity == 1)
        {
            return true;
        }
        return false;
    }

    const getCartItem = (item_id) =>
    {
        let cartItem = CartStore.items.find(item => item.id == item_id);

        return cartItem;
    }
    return {
        getCartCount,
        getCartProducts,
        removeCartItem,
        incrementItemQuantity,
        decrementItemQuantity,
        moveToWishlist

    }
}