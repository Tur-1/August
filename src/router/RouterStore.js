import { ref } from "vue";
import router from '@/router'
import config from "@/config/app";
import { isNotNull } from "@/helpers";
import { defineStore } from 'pinia'

const useRouterStore = defineStore('RouterStore', () =>
{
    const intendedPath = ref(null);
    const pageTitle = ref(null);
    const previousPage = ref(null);

    const setIntendedPath = (path) =>
    {
        intendedPath.value = path;
    };
    const redirectToIntendedPath = () =>
    {

        if (isNotNull(intendedPath.value))
        {
            let path = intendedPath.value;
            intendedPath.value = null;
            return router.push(path);
        }
    };
    const redirectToRoute = (routeName) =>
    {

        return router.push({ name: routeName });
    };
    const setPageBackgroundColor = (color) =>
    {

        document.getElementById('app').style.backgroundColor = color ?? 'white';

    };
    const setPageTitle = (title) =>
    {

        if (title && title !== config.APP_NAME)
        {
            document.title = `${ config.APP_NAME } - ${ title }`.toString().toUpperCase();
        } else
        {
            document.title = config.APP_NAME;
        }

        pageTitle.value = title;
    };
    const setPreviousPage = (previousPagePath) =>
    {
        previousPage.value = previousPagePath;
    };


    return {
        intendedPath,
        previousPage,
        setIntendedPath,
        setPageTitle,
        pageTitle,
        redirectToIntendedPath,
        setPageBackgroundColor,
        redirectToRoute,
        setPreviousPage,
    };

}, {
    persist: {
        paths: ['intendedPath', 'pageTitle', 'previousPage'],
    },
})

export default useRouterStore;