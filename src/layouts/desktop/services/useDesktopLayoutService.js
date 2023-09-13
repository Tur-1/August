import useLayoutApi from "@/layouts/desktop/api/useLayoutApi"
import SectionsStore from "@/layouts/desktop/stores/SectionsStore";


export default function useDesktopLayoutService()
{


    const getAllSections = async () =>
    {
        try
        {

            let response = await useLayoutApi.getAllSections();

            SectionsStore.list = response.data.sections
        } catch (error)
        {

        }
    }


    return {
        getAllSections,
    }
}

