
import { reactive } from "vue";

import { defineStore } from 'pinia'


export const useProductStore = defineStore('ProductStore', () =>
{

    const product = reactive([]);
    const relatedProducts = reactive([]);
    const categories = reactive([]);
    const images = reactive([]);
    const sizeOptions = reactive([]);
    const selectedSize = reactive({
        size_id: null,
        product_id: null,
    });

    const selectSize = ({ size_id, product_id }) =>
    {

        selectedSize.size_id = size_id;
        selectedSize.product_id = product_id;

    }

    return {
        relatedProducts,
        product,
        categories,
        sizeOptions,
        images,
        selectedSize,
        selectSize
    };
});

export default useProductStore;
