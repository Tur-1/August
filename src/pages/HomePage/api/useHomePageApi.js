import api from "@/api";


const getBanners = () =>
{
    return api().get("/home-items");
}


const getLatestProducts = () =>
{
    return api().get("/home-latest-products");
}
export default {
    getBanners,
    getLatestProducts

}