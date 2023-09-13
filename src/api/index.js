
import { useAuthModalStore, useAuthUserStore } from "@/pages/AuthPage/stores";
import { FormStore } from "@/components/BaseForm";
import config from "@/config/app";
import { isNotAuthenticated, isUnprocessableContent } from "@/helpers";
import axios from "axios";
import { useCartCounterStore } from "@/pages/ShoppingCartPage/stores";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
export default (url = config.APP_API_URL) =>
{

    let create = axios.create({
        baseURL: url,
    });


    create.interceptors.response.use((response) => response,
        (error) =>
        {
            if (isUnprocessableContent(error))
            {
                FormStore.setErrors(error);
            }

            if (isNotAuthenticated(error))
            {
                useCartCounterStore().reset();
                useAuthUserStore().reset();
                useAuthModalStore.open();
            }

            // But, be SURE to return the rejected promise, so the caller still has 
            // the option of additional specialized handling at the call-site:
            return Promise.reject(error);

        });
    return create;
}