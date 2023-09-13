import { reactive } from "vue";


const useMainOffcanvas = reactive({
    isOpen: false,
    id: String,
    open(id)
    {
        this.id = id;
        this.isOpen = true;

    },
    close(id)
    {
        this.id = id;
        this.isOpen = false;

    }
});
export default useMainOffcanvas;