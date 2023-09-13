import api from "@/api"


const getAllSections = () =>
{
    return api().get('/categories/sections');
}

export default {
    getAllSections
}