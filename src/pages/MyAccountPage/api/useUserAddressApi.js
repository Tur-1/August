import api from "@/api";

const BASE_URL = 'my-account/user';

const getUserAddresses = () =>
{
    return api().get(`${ BASE_URL }/addresses`);
}

const updateUserAddress = (fields) =>
{
    return api().post(`${ BASE_URL }/addresses/update`, fields);
}
const storeNewAddress = (fields) =>
{
    return api().post(`${ BASE_URL }/addresses/store`, fields);
}
const destroyAddress = (id) =>
{
    return api().post(`${ BASE_URL }/addresses/${ id }/delete`);
}
export default {
    getUserAddresses,
    storeNewAddress,
    updateUserAddress,
    destroyAddress,

}