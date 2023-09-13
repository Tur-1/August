
import { skeletonLoading } from '@/helpers';
import useHomePageApi from '@/pages/HomePage/api/useHomePageApi';
import useHomePageStore from "@/pages/HomePage/store/HomePageStore";

export default function useHomePageService()
{
    const homePageStore = useHomePageStore();
    const getLatestProducts = async () =>
    {

        skeletonLoading.show();
        try
        {
            let response = await useHomePageApi.getLatestProducts();
            homePageStore.products = response.data.products;

        } catch (error)
        {

        }

        skeletonLoading.hide();

    }
    const getBanners = async () =>
    {
        skeletonLoading.show();

        try
        {
            let response = await useHomePageApi.getBanners();
            homePageStore.largeBanners = response.data.largeBanners;
            homePageStore.mediumBanners = response.data.mediumBanners;

        } catch (error)
        {
        }
        skeletonLoading.hide();

    }
    return {
        getLatestProducts,
        getBanners
    }
}
