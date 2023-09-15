
import useShopPageService from '@/pages/ShopPage/services/useShopPageService';
import { FilterStore, SortProductsStore } from "@/pages/ShopPage/stores";
import { ref } from "vue";




export default function useSortProductsService()
{

    const { getProducts } = useShopPageService();
    let isOpen = ref(false);

    let activeSort = ref(SortProductsStore.list[0].name);

    const sortPorudtcs = async ({ slug: slug, categoryUrl: categoryUrl }) =>
    {
        FilterStore.sort = slug;

        getActiveSort(FilterStore.sort);
        await getProducts({
            category_url: categoryUrl,
            query: FilterStore,
        });

    };
    const showSortDropdown = () =>
    {
        if (isOpen.value)
        {
            isOpen.value = false;
        } else
        {
            isOpen.value = true;
        }
    };

    const getActiveSort = (querySort) =>
    {
        let sort = SortProductsStore.list.find(
            ({ slug }) => slug == querySort
        );
        if (sort)
        {
            activeSort.value = sort?.name;
        }
    }
    return {
        sortPorudtcs,
        showSortDropdown,
        activeSort,
        getActiveSort,
        isOpen
    }


}
