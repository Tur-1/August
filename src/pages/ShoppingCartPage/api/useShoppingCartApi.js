import api from "@/api"



export default {

    getCartCount() 
    {
        return api().get('cart/count');
    },
    getCartProducts() 
    {
        return api().get('/cart');
    },
    removeCartItem(cart_item_id)
    {
        return api().post(`/cart/remove-item/${ cart_item_id }`);
    },
    moveToWishlist({ product_id, cart_item_id })
    {
        return api().post(`cart/move-to-wishlist/${ cart_item_id }/product/${ product_id }`);
    },
    incrementItemQuantity(cart_item_id)
    {
        return api().post(`cart/increase-item-quantity/${ cart_item_id }`);
    },
    decrementItemQuantity(cart_item_id)
    {
        return api().post(`cart/decrease-item-quantity/${ cart_item_id }`);
    },


}