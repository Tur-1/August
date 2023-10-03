
import { reactive, ref } from "vue";


const getOffcanvasContainer = () =>
{
    return document.querySelector(".bottom-offcanvas-bg");
}
const getAppDiv = () =>
{
    return document.getElementById('app');
}
const setBodyOverFlow = (value) =>
{
    document.documentElement.style.overflow = value;
};


const useBottomOffcanvas = reactive({
    scaleAnimation: false,
    id: String,
    open(id)
    {
        this.isOpen = true;
        this.id = id;

        setBodyOverFlow("hidden");

    },
    close(id, event)
    {

        if (event && event.target.closest(".bottom-offcanvas-container")) return;

        setBodyOverFlow("auto");
        this.id = null;

    },


});
export default useBottomOffcanvas;