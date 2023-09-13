
import { reactive, ref } from "vue";


const getOffcanvasContainer = () =>
{
    return document.querySelector(".bottom-offcanvas-container");
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
    open(id, scaleAnimation = false)
    {
        this.id = id;
        document.body.style.backgroundColor = "black";
        if (id == this.id)
        {
            setTimeout(() =>
            {
                addShowClass();
            }, 100);

            document.documentElement.style.overflow = "hidden";


        }


        this.isOpen = true;
        if (scaleAnimation)
        {
            this.scaleAnimation = scaleAnimation;
            setTimeout(() =>
            {


                document.getElementById('app').style.scale = "0.95 0.98";


            }, 100);
        }

    },
    close(id, event)
    {
        this.id = id;

        if (event && event.target.closest(".bottom-offcanvas-container")) return;
        document.documentElement.style.overflow = "auto";

        if (this.scaleAnimation)
        {
            document.getElementById('app').style.removeProperty('scale');
            document.body.style.backgroundColor = 'white';
            this.scaleAnimation = false;
        }
        removeShowClass();

        setTimeout(() =>
        {
            this.isOpen = false;
        }, 300);



    },


});
export default useBottomOffcanvas;