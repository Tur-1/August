import api from "@/api";



const getAllCategories = () =>
{
    return api().get("/categories");
}


export default {
    getAllCategories,

}