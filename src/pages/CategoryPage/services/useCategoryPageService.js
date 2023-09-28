
import useSizesStore from "@/pages/CategoryPage/stores/SizesStore";
import useColorsStore from "@/pages/CategoryPage/stores/ColorsStore";
import useBrandsStore from "@/pages/CategoryPage/stores/BrandsStore";
import useProductsStore from "@/pages/CategoryPage/stores/ProductsStore";
import useCategoriesStore from "@/pages/CategoryPage/stores/CategoriesStore";

import useCategoryPageApi from '@/pages/CategoryPage/api/useCategoryPageApi'
import useRouterStore from '@/router/RouterStore';
import { skeletonLoading } from "@/helpers";
import { useRoute } from "vue-router";




export default function useCategoryPageService()
{
    const route = useRoute();

    const routerService = useRouterStore();


    const getCategory = async () =>
    {

        skeletonLoading.show('sidebar');

        const CategoriesStore = useCategoriesStore();

        CategoriesStore.reset();


        try
        {

            let response = await useCategoryPageApi.getCategory(route.params.category_url);

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

            let response = await useCategoryPageApi.getProducts(
                {
                    category_url: route.params.category_url,
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

            let response = await useCategoryPageApi.getBrands(route.params.category_url);

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

            let response = await useCategoryPageApi.getSizes(route.params.category_url);

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

            let response = await useCategoryPageApi.getColors(route.params.category_url);

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

            let response = await useCategoryPageApi.getProductsTotal(
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
