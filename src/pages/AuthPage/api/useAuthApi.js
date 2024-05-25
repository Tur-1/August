import api from "@/api";



const setCsrfCookie = () =>
{
    api().get("sanctum/csrf-cookie");
}

const login = (fields) =>
{
    setCsrfCookie();

    return api().post("login", fields);
}

const getAuthUser = () =>
{
    return api().post("/get-auth-user");
}
const logout = () =>
{

    return api().post("logout");
}
const register = (fields) =>
{
    setCsrfCookie();
    return api().post("register", fields);
}
const sendPasswordResetLink = (fields) =>
{

    return api().post("/forgot-password", fields);
}
const resetPassword = (fields) =>
{

    return api().post("/reset-password", fields);
}

export default {
    register,
    login,
    logout,
    resetPassword,
    sendPasswordResetLink,
    getAuthUser
}