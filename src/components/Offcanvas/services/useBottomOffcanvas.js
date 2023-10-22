
import { isRunningStandalone } from "@/helpers";
import { reactive, ref } from "vue";



const getApp = () =>
{
    return document.getElementById('app');
}
const getBodyTag = () =>
{
    return document.body;
}
const setBodyOverFlow = (value) =>
{

    document.documentElement.classList.add(value);

};

const removeBodyOverFlow = (value) =>
{

    document.documentElement.classList.remove(value);

};



const useBottomOffcanvas = reactive({
    scaleAnimation: false,
    isOpen: false,
    id: String,
    open(id, scaleAnimation = false)
    {

        setBodyOverFlow('overflowHidden');
        this.isOpen = true;
        this.id = id;
    },
    close(id, event)
    {
        removeBodyOverFlow('overflowHidden');
        this.isOpen = false;
        if (event && event.target.closest(".bottom-offcanvas-container")) return;

        this.id = null;

    },


});
export default useBottomOffcanvas;