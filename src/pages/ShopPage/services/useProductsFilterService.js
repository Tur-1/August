import { useBottomOffcanvas } from "@/components/Offcanvas";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { FilterStore } from "@/pages/ShopPage/stores";
import { useRoute, useRouter } from "vue-router";

export default function useProductsFilterService()
{
    const route = useRoute();
    const router = useRouter();

    const {
        getProducts,
        getProductsTotal,
    } = useShopPageService();

    const filterProducts = async () =>
    {
        closeFilterOffcanvas();

        await getProducts();
    };

    const clearAll = () =>
    {
        for (const iterator in FilterStore)
        {
            FilterStore[iterator] = [];
        }

        filterProducts();
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
