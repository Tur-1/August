import api from "@/api";

const BASE_URL = 'wishlist';

const getUserWishlist = () =>
{
    return api().get(BASE_URL);
}
const addToWishlist = (product_id) =>
{
    return api().post(`${ BASE_URL }/${ product_id }/store`);
}
export default {
    getUserWishlist,
    addToWishlist
};