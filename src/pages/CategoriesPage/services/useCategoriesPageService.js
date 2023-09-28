
import { skeletonLoading } from '@/helpers';
import useCategoriesPageApi from '@/pages/CategoriesPage/api/useCategoriesPageApi';
import CategoriesPageStore from '@/pages/CategoriesPage/store/CategoriesPageStore';
import useRouterStore from '@/router/RouterStore';

export default function useCategoriesPageService()
{
    const routerService = useRouterStore();

    const getAllCategories = async () =>
    {

        skeletonLoading.show();

        try
        {
            let response = await useCategoriesPageApi.getAllCategories();
            CategoriesPageStore.sections = response.data;

        } catch (error)
        {
            routerService.redirectToRoute('pageNotFound');

        }

        skeletonLoading.hide();

    }




    return {
        getAllCategories,

    }
}
