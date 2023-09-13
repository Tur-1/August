
import { skeletonLoading } from '@/helpers';
import useCategoriesPageApi from '@/pages/CategoriesPage/api/useCategoriesPageApi';
import CategoriesPageStore from '@/pages/CategoriesPage/store/CategoriesPageStore';

export default function useCategoriesPageService()
{

    const getAllCategories = async () =>
    {

        skeletonLoading.show();

        try
        {
            let response = await useCategoriesPageApi.getAllCategories();
            CategoriesPageStore.sections = response.data;

        } catch (error)
        {
        }

        skeletonLoading.hide();

    }




    return {
        getAllCategories,

    }
}
