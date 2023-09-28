
import useCategoryPageService from '@/pages/CategoryPage/services/useCategoryPageService';
import { ref } from "vue";
import ProductsFilterStore from '@/pages/CategoryPage/stores/ProductsFilterStore';
import SortProductsStore from '@/pages/CategoryPage/stores/SortProductsStore';



export default function useSortProductsService()
{

    const { getProducts } = useCategoryPageService();
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
