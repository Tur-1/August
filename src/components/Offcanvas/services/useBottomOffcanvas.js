
import { reactive, ref } from "vue";


const getOffcanvasContainer = () =>
{
    return document.querySelector(".bottom-offcanvas-container");
}
const getAppDiv = () =>
{
    return document.getElementById('app');
}
const addShowClass = () =>
{
    getOffcanvasContainer().classList.add("show");
};
const removeShowClass = () =>
{
    getOffcanvasContainer().classList.remove("show");
};


const useBottomOffcanvas = reactive({
    isOpen: false,
    scaleAnimation: false,
    id: String,
    open(id)
    {
        this.isOpen = true;
        this.id = id;

        setTimeout(() =>
        {
            addShowClass();
        }, 100);


        document.documentElement.style.overflow = "hidden";

    },
    close(id, event)
    {
        this.id = id;

        if (event && event.target.closest(".bottom-offcanvas-container")) return;
        document.documentElement.style.overflow = "auto";

        removeShowClass();

        setTimeout(() =>
        {
            this.isOpen = false;
        }, 300);

    },


});
export default useBottomOffcanvas;