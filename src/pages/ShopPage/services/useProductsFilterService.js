import { useBottomOffcanvas } from "@/components/Offcanvas";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";

import { useRoute, useRouter } from "vue-router";

export default function useProductsFilterService()
{
    const route = useRoute();
    const {
        getProducts,
        getProductsTotal,
    } = useShopPageService();

    const filterProducts = async ({ query }) =>
    {
        closeFilterOffcanvas();

        await getProducts({ query: query });
    };

    const clearAll = ({ query }) =>
    {
        for (const iterator in ProductsFilterStore)
        {
            ProductsFilterStore[iterator] = [];
        }

        filterProducts({ query: query });
    }

    const closeFilterOffcanvas = () =>
    {

        useBottomOffcanvas.close("filter");
    }

    const removeQuery = async (index, item, queryString) =>
    {
        // ProductsFilterStore?.[queryString].splice(index, 1);
    };

    const countProductsTotal = async () =>
    {
        await getProductsTotal({
            category_url: route.params.categoryUrl,
            query: route.query,
        });
    };

    return {
        clearAll,
        filterProducts,
        removeQuery,
        countProductsTotal,
        closeFilterOffcanvas


    }


}
