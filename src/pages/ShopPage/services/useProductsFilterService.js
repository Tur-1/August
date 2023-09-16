import { useBottomOffcanvas } from "@/components/Offcanvas";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { FilterStore } from "@/pages/ShopPage/stores";
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
        for (const iterator in FilterStore)
        {
            FilterStore[iterator] = [];
        }

        filterProducts({ query: query });
    }

    const closeFilterOffcanvas = () =>
    {

        useBottomOffcanvas.close("filter");
    }

    const removeQuery = async (index, item, queryString) =>
    {
        // FilterStore?.[queryString].splice(index, 1);
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
