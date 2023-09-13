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

export default {
    getProducts,
    getCategory
};