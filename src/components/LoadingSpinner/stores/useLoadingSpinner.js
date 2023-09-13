import { reactive } from "vue";



const useLoadingSpinner = reactive({
    isLoading: false,
    show()
    {
        this.isLoading = true;
    },
    hide()
    {

        this.isLoading = false;
    }
});

export default useLoadingSpinner;