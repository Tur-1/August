
import config from "@/config/app";
import { isNotAuthenticated, isUnprocessableContent } from "@/helpers";
import axios from "axios";
import { useCartCounterStore } from "@/pages/ShoppingCartPage/stores";
import useAuthUserStore from "@/pages/AuthPage/stores/AuthUserStore";
import useAuthModalStore from "@/pages/AuthPage/stores/AuthModalStore";
import FormStore from "@/components/BaseForm/stores/FormStore";
import useRouterStore from "@/router/RouterStore";

const api = (url = config.APP_API_URL) =>
{
    let Axios = axios.create({
        baseURL: url,
        withCredentials: true,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    Axios.interceptors.response.use(null, (error) =>
    {

        if (isUnprocessableContent(error))
        {
            FormStore.setErrors(error);
        }

        if (isNotAuthenticated(error))
        {
            const routeStore = useRouterStore();
            useCartCounterStore().reset();
            useAuthUserStore().reset();
            if (routeStore.isRouteRequiresAuth())
            {
                routeStore.redirectToRoute('home');
            }
            useAuthModalStore.open();
        }

        // But, be SURE to return the rejected promise, so the caller still has 
        // the option of additional specialized handling at the call-site:
        return Promise.reject(error);

    });
    return Axios;
}


export default api