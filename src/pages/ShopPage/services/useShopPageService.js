import
{
    useCategoriesStore,
    useProductsStore,
    useBrandsStore,
    useColorsStore,
    useSizesStore
} from "@/pages/ShopPage/stores";
import useShopPageApi from '@/pages/ShopPage/api/useShopPageApi'
import useRouterStore from '@/router/RouterStore';
import { skeletonLoading } from "@/helpers";




export default function useShopPageService()
{
    const routerService = useRouterStore();


    const getCategory = async (category_url) =>
    {
        const CategoriesStore = useCategoriesStore();


        skeletonLoading.show();

        try
        {

            let response = await useShopPageApi.getCategory(category_url);

            CategoriesStore.category = response.data.category;
            CategoriesStore.categoryChildren = response.data.children;
            CategoriesStore.parentCategory = response.data.parentCategory;
            CategoriesStore.parentChildren = response.data.parentChildren;
            CategoriesStore.parentsCategory = response.data.parents;


        } catch (error)
        {

            routerService.redirectToRoute('pageNotFound');

        }

        skeletonLoading.hide();


    }
    const getProducts = async ({ url, query, category_url }) =>
    {
        skeletonLoading.show();

        const ProductsStore = useProductsStore();
        const brandsStore = useBrandsStore();
        const colorsStore = useColorsStore();
        const sizeStore = useSizesStore();

        try
        {

            let response = await useShopPageApi.getProducts(
                {
                    category_url: category_url,
                    url: url,
                    query: query
                });

            ProductsStore.products = response.data.products.data;
            ProductsStore.total = response.data.products.meta.pagination.total;
            ProductsStore.pagination = response.data.products.meta.pagination;
            brandsStore.brands = response.data.brands;
            colorsStore.colors = response.data.colors;
            sizeStore.sizes = response.data.sizeOptions;


        } catch (error)
        {
            routerService.redirectToRoute('pageNotFound');
        }

        skeletonLoading.hide();

    }
    return {
        getProducts,
        getCategory
    }


}
