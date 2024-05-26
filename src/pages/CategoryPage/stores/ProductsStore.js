import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useProductsStore = defineStore('ProductsStore', () =>
{
    const count = ref(0);
    const products = reactive([]);
    const pagination = reactive({
        meta:Object,
        prevPage:String,
        nextPage:String
});
    const total = ref(0);


    return {
        products,
        pagination,
        count,
        total
    };
});

export default useProductsStore;