import { reactive } from "vue";

const CartStore = reactive({
    items: [],
    cartDetails: [],
    isLoading: false,
    showLoading()
    {
        this.isLoading = true;
    },
    hideLoading()
    {
        this.isLoading = false;
    }

});
export default CartStore;