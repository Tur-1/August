import api from "@/api";

const PAGE_URL = 'categories';


const getCategory = (category_url, url) =>
{
    return api().get(`${ PAGE_URL }/${ category_url }`);
}
const getProducts = ({ category_url, url, query } = {}) =>
{

    return api().get(url ?? `${ PAGE_URL }/${ category_url }/products`, { params: query });
}
const getProductsTotal = ({ category_url, query } = {}) =>
{
    return api().get(`${ PAGE_URL }/${ category_url }/products/total`, { params: query });
}
const getSizes = (category_url) =>
{
    return api().get(`${ PAGE_URL }/${ category_url }/sizes`);
}
const getBrands = (category_url) =>
{
    return api().get(`${ PAGE_URL }/${ category_url }/brands`);
}
const getColors = (category_url) =>
{
    return api().get(`${ PAGE_URL }/${ category_url }/colors`);
}

export default {
    getProducts,
    getColors,
    getBrands,
    getSizes,

    getCategory,
    getProductsTotal,
};