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


            useToastNotification.open().withMessage(response.data.status);

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


            useToastNotification.open().withMessage(response.data.status);



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
        resetPassword
    }
}

