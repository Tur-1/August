
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
    getApp().style.overflow = value;
    getBodyTag().style.overflow = value;
    document.documentElement.style.overflow = value;
    document.querySelector(".bottom-offcanvas-bg").style.overflow = value;

};





const useBottomOffcanvas = reactive({
    scaleAnimation: false,
    isOpen: false,
    id: String,
    open(id, scaleAnimation = false)
    {
        this.isOpen = true;
        this.id = id;

        if (scaleAnimation && isRunningStandalone())
        {
            this.scaleAnimation = true;
            getApp().style.scale = '.97 .90';
            getBodyTag().classList.add('black-background');
        }

        setBodyOverFlow("hidden");


    },
    close(id, event)
    {
        this.isOpen = false;
        if (event && event.target.closest(".bottom-offcanvas-container")) return;

        if (this.scaleAnimation)
        {
            this.scaleAnimation = false;
            document.getElementById('app').style.removeProperty('scale');
            getBodyTag().classList.remove('black-background');
        }


        setBodyOverFlow("auto");
        this.id = null;

    },


});
export default useBottomOffcanvas;