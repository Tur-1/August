import { reactive } from "vue";

const setBodyOverFlow = (value) =>
{
    document.documentElement.style.overflow = value;

};
const useMainOffcanvas = reactive({
    isOpen: false,
    id: String,
    open(id)
    {
        this.id = id;
        this.isOpen = true;

        setBodyOverFlow("hidden");

    },
    close(id)
    {
        this.id = id;
        this.isOpen = false;
        setBodyOverFlow("auto");

    }
});
export default useMainOffcanvas;