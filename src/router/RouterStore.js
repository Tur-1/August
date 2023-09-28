import { ref } from "vue";
import router from '@/router'
import config from "@/config/app";
import { isNotNull } from "@/helpers";
import { defineStore } from 'pinia'
import { useRoute } from "vue-router";

const useRouterStore = defineStore('RouterStore', () =>
{
    const route = useRoute();
    const intendedPath = ref(null);
    const pageTitle = ref(null);
    let previousPage = ref(null);

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
    const isRouteRequiresAuth = () =>
    {
        return route.meta.requiresAuth;
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
        isRouteRequiresAuth
    };

}, {
    persist: {
        paths: true,
    },
})

export default useRouterStore;