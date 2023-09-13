
import { useAddressStore } from "@/pages/MyAccountPage/stores";
import useToastNotification from "@/components/Toast/useToastNotification";
import { FormStore } from "@/components/BaseForm";
import { useBaseModel } from "@/components/BaseModal";
import { useConfirmModal } from "@/components/ConfirmModel";
import useUserAddressApi from "@/pages/MyAccountPage/api/useUserAddressApi";
import { skeletonLoading } from "@/helpers";
import { useLoadingSpinner } from "@/components/LoadingSpinner";

export default function useUserAddressService()
{

    const AddressStore = useAddressStore();
    const getUserAddresses = async () =>
    {

        skeletonLoading.show();
        try
        {
            let response = await useUserAddressApi.getUserAddresses();

            AddressStore.addresses = response.data.addresses;
        } catch (error)
        {

        }
        skeletonLoading.hide();
    }

    const storeNewAddress = async () =>
    {
        useLoadingSpinner.show();

        FormStore.clearErrors();
        try
        {
            let response = await useUserAddressApi.storeNewAddress(FormStore.fields);

            AddressStore.addresses.push(response.data.address);
            useToastNotification.open().withMessage(response.data.message);

            useBaseModel.close("account-address-modal");
        } catch (error)
        {

        }
        useLoadingSpinner.hide();


    };
    const updateUserAddress = async () =>
    {

        useLoadingSpinner.show();
        FormStore.clearErrors();
        try
        {
            let response = await useUserAddressApi.updateUserAddress(FormStore.fields);

            AddressStore.addresses = response.data.addresses;

            useToastNotification.open().withMessage(response.data.message);

            useBaseModel.close("account-address-modal");
        } catch (error)
        {

        }
        useLoadingSpinner.hide();


    };
    const destroyUserAddress = async () =>
    {
        useLoadingSpinner.show();

        try
        {
            let response = await useUserAddressApi.destroyAddress(AddressStore.address_id.id);

            AddressStore.addresses.splice(AddressStore.address_id.index, 1);

            useToastNotification.open().withMessage(response.data.message);
        } catch (error)
        {
            console.log(error);
        }
        useLoadingSpinner.hide();

        useConfirmModal.close();

    };

    const openNewAddressModal = () =>
    {
        AddressStore.desableEditMode();

        FormStore.clearErrors();
        useBaseModel.open("account-address-modal");

        FormStore.setFields({
            address_id: "",
            full_name: "",
            address: "",
            city: "",
            phone_number: "",
            street: "",
        });
    };
    const editAddress = (address) =>
    {

        AddressStore.enableEditMode();
        FormStore.clearErrors();
        FormStore.setFields({
            full_name: address.full_name,
            city: address.city,
            address: address.address,
            phone_number: address.phone_number,
            street: address.street,
            address_id: address.address_id,
        });
        useBaseModel.open("account-address-modal");
    };
    const openConfirmModal = ({ address_id, index }) =>
    {
        useConfirmModal.open();
        AddressStore.address_id.id = address_id;
        AddressStore.address_id.index = index;
    };
    return {
        storeNewAddress,
        updateUserAddress,
        destroyUserAddress,
        getUserAddresses,
        editAddress,
        openNewAddressModal,
        openConfirmModal
    }
}