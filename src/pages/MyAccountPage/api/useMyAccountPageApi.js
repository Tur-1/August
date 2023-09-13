import api from "@/api";

const BASE_URL = 'my-account/';


const getUserOrders = () =>
{
    return api().get(BASE_URL + "orders");
}
const showUserOrder = (order_id) =>
{
    return api().get(BASE_URL + "orders/" + order_id);
}
const updateUserInformation = (fields) =>
{
    return api().post(BASE_URL + "user/update-info", fields);
}
const updateUserPhoneNumber = (phoneNumber) =>
{
    return api().post(BASE_URL + "user/update-phone-number", { phone_number: phoneNumber });
}

const updateUserPassword = (fields) =>
{
    return api().post(BASE_URL + "user/update-password", fields);
}


export default {
    updateUserInformation,
    updateUserPhoneNumber,
    updateUserPassword,
    showUserOrder,
    getUserOrders
}