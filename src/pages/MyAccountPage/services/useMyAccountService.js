
import useMyAccountPageApi from "@/pages/MyAccountPage/api/useMyAccountPageApi";
import useOrdersStore from "@/pages/MyAccountPage/stores/OrdersStore";
import useToastNotification from "@/components/Toast/useToastNotification";
import FormStore from "@/components/BaseForm/stores/FormStore";
import useBaseModel from "@/components/BaseModal/service/useBaseModel";
import useRouterStore from "@/router/RouterStore";
import useAuthUserStore from "@/pages/AuthPage/stores/AuthUserStore";
import { isNotFound, skeletonLoading } from "@/helpers";
import useLoadingSpinner from "@/components/LoadingSpinner/stores/useLoadingSpinner";


export default function useMyAccountService()
{
    const userStore = useAuthUserStore();
    const ordersStore = useOrdersStore();


    const getUserOrders = async () =>
    {
        skeletonLoading.show();
        try
        {
            let response = await useMyAccountPageApi.getUserOrders();

            ordersStore.orders = response.data;
        } catch (error)
        {
        }
        skeletonLoading.hide();
    }

    const showUserOrder = async (order_id) =>
    {

        skeletonLoading.show();
        try
        {

            let response = await useMyAccountPageApi.showUserOrder(order_id);

            ordersStore.order = response.data;
        } catch (error)
        {
            if (isNotFound(error))
            {
                useRouterStore().redirectToRoute('myAccount');
            }
        }
        skeletonLoading.hide();

    }
    const updateUserInformation = async () =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();
        try
        {
            let response = await useMyAccountPageApi.updateUserInformation(FormStore.fields);

            userStore.user = response.data.user;
            useToastNotification.open().withMessage(response.data.message);
            useBaseModel.close("account-info-modal");
        } catch (error)
        {

        }

        useLoadingSpinner.hide();

    }

    const updateMyPhoneNumber = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();
        try
        {
            let response = await useMyAccountPageApi.updateUserPhoneNumber(FormStore.fields.phone_number);

            userStore.user.phone_number = FormStore.fields.phone_number;

            useToastNotification.open().withMessage(response.data.message);

            useBaseModel.close("account-info-modal");
        } catch (error)
        {

        }

        useLoadingSpinner.hide();
    };

    const updateMyAccountPassword = async () =>
    {
        useLoadingSpinner.show();
        FormStore.clearErrors();
        try
        {
            let response = await useMyAccountPageApi.updateUserPassword(FormStore.fields);

            useToastNotification.open().withMessage(response.data.message);

            useBaseModel.close("account-password-modal");
        } catch (error)
        {


        }

        useLoadingSpinner.hide();
    };


    return {

        updateUserInformation,
        updateMyPhoneNumber,
        updateMyAccountPassword,
        getUserOrders,
        showUserOrder


    }
}