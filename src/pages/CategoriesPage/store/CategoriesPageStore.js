import { reactive, ref } from "vue";

const CategoriesPageStore = reactive({
    sections: [],
    categories: [],
    onProgress: false,
})

export default CategoriesPageStore;