
import useShopPageService from '@/pages/ShopPage/services/useShopPageService';
import { ref } from "vue";
import ProductsFilterStore from '@/pages/ShopPage/stores/ProductsFilterStore';
import SortProductsStore from '@/pages/ShopPage/stores/SortProductsStore';



export default function useSortProductsService()
{

    const { getProducts } = useShopPageService();
    let isOpen = ref(false);

    let activeSort = ref(SortProductsStore.list[0].name);

    const sortPorudtcs = async ({ slug: slug }) =>
    {
        ProductsFilterStore.sort = slug;

        getActiveSort(ProductsFilterStore.sort);
        await getProducts({
            query: ProductsFilterStore,
        });;

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
