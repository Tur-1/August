import useAuthApi from "@/pages/AuthPage/api/useAuthApi";
import useRouterStore from "@/router/RouterStore";
import useToastNotification from "@/components/Toast/useToastNotification";
import FormStore from "@/components/BaseForm/stores/FormStore";
import
{
    useAuthUserStore,
    useAuthModalStore
} from "@/pages/AuthPage/stores";
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import { useCartCounterStore } from "@/pages/ShoppingCartPage/stores";

export default function useAuthService()
{
    const routeStore = useRouterStore();
    const authUser = useAuthUserStore();

    const login = async () =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();
        try
        {
            let response = await useAuthApi.login(FormStore.fields);

            authUser.isAuthenticated = true;
            authUser.user = response.data.user;

            useAuthModalStore.close();

            routeStore.redirectToIntendedPath();

        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    };
    const loginGitub = async () =>
    {

        useLoadingSpinner.show();

        try
        {
            let response = await useAuthApi.loginGitub();

            window.location = response.data;

        } catch (error)
        {

            console.log(error);
        }

        useLoadingSpinner.hide();

    };
    const register = async () =>
    {

        useLoadingSpinner.show();

        FormStore.clearErrors();
        try
        {
            let response = await useAuthApi.register(FormStore.fields);

            authUser.isAuthenticated = true;
            authUser.user = response.data.user;

            useAuthModalStore.close();


            routeStore.redirectToIntendedPath();

        } catch (error)
        {
        }

        useLoadingSpinner.hide();
    };
    const logout = async () =>
    {

        useLoadingSpinner.show();

        try
        {
            await useAuthApi.logout();

            authUser.reset();

            useCartCounterStore().reset();

            routeStore.redirectToRoute('home');

        } catch (error)
        {


        }
        useLoadingSpinner.hide();

    };
    const sendPasswordResetLink = async () =>
    {
        useLoadingSpinner.show();

        try
        {
            let response = await useAuthApi.sendPasswordResetLink(FormStore.fields);

            useAuthModalStore.close();

            useToastNotification.open().withMessage(response.data.message);

        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    }
    const resetPassword = async () =>
    {
        useLoadingSpinner.show();

        try
        {
            let response = await useAuthApi.resetPassword(FormStore.fields);


            routeStore.redirectToRoute('home');
            useToastNotification.open().withMessage(response.data.message);



        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    }


    return {
        login,
        register,
        logout,
        sendPasswordResetLink,
        resetPassword,
        loginGitub
    }
}

