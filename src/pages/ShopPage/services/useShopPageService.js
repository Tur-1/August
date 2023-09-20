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
import { useRoute } from "vue-router";




export default function useShopPageService()
{
    const route = useRoute();

    const routerService = useRouterStore();


    const getCategory = async (category_url) =>
    {
        const CategoriesStore = useCategoriesStore();


        skeletonLoading.show('sidebar');

        try
        {

            let response = await useShopPageApi.getCategory(route.params.categoryUrl);

            CategoriesStore.category = response.data.category;
            CategoriesStore.categoryChildren = response.data.children;
            CategoriesStore.parentCategory = response.data.parentCategory;
            CategoriesStore.parentChildren = response.data.parentChildren;
            CategoriesStore.parentsCategory = response.data.parents;


        } catch (error)
        {

            routerService.redirectToRoute('pageNotFound');

        }

        skeletonLoading.hide('sidebar');


    }
    const getProducts = async ({ query, url }) =>
    {
        skeletonLoading.show('products');

        const ProductsStore = useProductsStore();
        const brandsStore = useBrandsStore();
        const sizeStore = useSizesStore();


        try
        {

            let response = await useShopPageApi.getProducts(
                {
                    category_url: route.params.categoryUrl,
                    url: url,
                    query: query
                });

            ProductsStore.products = response.data.products.data;
            ProductsStore.total = response.data.products.meta.pagination.total;
            ProductsStore.pagination = response.data.products.meta.pagination;
            brandsStore.brands = response.data.brands;
            sizeStore.sizes = response.data.sizes;


        } catch (error)
        {
            routerService.redirectToRoute('pageNotFound');
        }

        skeletonLoading.hide('products');

    }

    const getBrands = async () =>
    {
        const brandsStore = useBrandsStore();
        try
        {

            let response = await useShopPageApi.getBrands(route.params.categoryUrl);

            brandsStore.brands = response.data.brands;

        } catch (error)
        {
            routerService.redirectToRoute('pageNotFound');
        }

    }
    const getSizes = async () =>
    {
        const sizeStore = useSizesStore();
        try
        {

            let response = await useShopPageApi.getSizes(route.params.categoryUrl);

            sizeStore.sizes = response.data.sizes;

        } catch (error)
        {
            routerService.redirectToRoute('pageNotFound');
        }

    }
    const getColors = async () =>
    {
        const colorsStore = useColorsStore();
        try
        {

            let response = await useShopPageApi.getColors(route.params.categoryUrl);

            colorsStore.colors = response.data.colors;

        } catch (error)
        {
            routerService.redirectToRoute('pageNotFound');
        }

    }
    const getProductsTotal = async ({ query, category_url }) =>
    {

        const ProductsStore = useProductsStore();
        try
        {

            let response = await useShopPageApi.getProductsTotal(
                {
                    category_url: category_url,
                    query: query
                });


            ProductsStore.total = response.data.total;


        } catch (error)
        {

        }
    }
    return {
        getProducts,
        getCategory,
        getProductsTotal,
        getColors,
        getBrands,
        getSizes,

    }


}
