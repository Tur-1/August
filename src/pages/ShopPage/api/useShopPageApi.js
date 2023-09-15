import api from "@/api";

const PAGE_URL = 'shop';


const getCategory = (categoryUrl, url) =>
{
    return api().get(`${ PAGE_URL }/category/${ categoryUrl }`);
}
const getProducts = ({ category_url, url, query } = {}) =>
{

    return api().get(url ?? `${ PAGE_URL }/category/${ category_url }/products`, { params: query });
}
const getProductsTotal = ({ category_url, query } = {}) =>
{
    return api().get(`${ PAGE_URL }/category/${ category_url }/products/total`, { params: query });
}
const getSizes = (categoryUrl) =>
{
    return api().get(`${ PAGE_URL }/category/${ categoryUrl }/sizes`);
}
const getBrands = (categoryUrl) =>
{
    return api().get(`${ PAGE_URL }/category/${ categoryUrl }/brands`);
}
const getColors = (categoryUrl) =>
{
    return api().get(`${ PAGE_URL }/category/${ categoryUrl }/colors`);
}

export default {
    getProducts,
    getColors,
    getBrands,
    getSizes,

    getCategory,
    getProductsTotal,
};