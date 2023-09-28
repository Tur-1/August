import { reactive } from "vue";

const ProductsFilterStore = reactive({
    brand: [],
    color: [],
    size: [],
    sort: [],
});


export default ProductsFilterStore;