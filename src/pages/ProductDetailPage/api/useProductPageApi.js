import api from "@/api";

const BASE_URL = 'product-detail';

const getProductDetail = (productSlug) =>
{
    return api().get(`${ BASE_URL }/${ productSlug }`);
}

const getProductReviews = (product_id) =>
{
    return api().get(`${ BASE_URL }/${ product_id }/reviews`);
}
const getRelatedProducts = (product_id) =>
{
    return api().get(`${ BASE_URL }/${ product_id }/related-products`);
}

const sendComment = (productSlug, comment) =>
{
    return api().post(`${ BASE_URL }/${ productSlug }/comment`, comment);
}
const addToCart = (params) =>
{
    return api().post(`${ BASE_URL }/add-to-cart`, params);
}


export default {
    getProductDetail,
    sendComment,
    addToCart,
    getProductReviews,
    getRelatedProducts
};