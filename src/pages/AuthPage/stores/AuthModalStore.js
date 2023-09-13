
import { reactive } from "vue";
import { useBaseModel } from "@/components/BaseModal";
import { useBottomOffcanvas } from "@/components/Offcanvas";
import { isDesktop, isMobile } from "@/helpers";


const useAuthModalStore = reactive({
    isOpen: false,

    open()
    {
        this.isOpen = true;

        if (isDesktop.value)
        {
            useBaseModel.open('auth-modal');
        }

        if (isMobile.value)
        {
            useBottomOffcanvas.open('auth-modal', true);
        }

    },
    close()
    {
        this.isOpen = false;
        this.waitFunctionProcessing = null;
        if (isDesktop.value)
        {
            useBaseModel.close('auth-modal');
        }

        if (isMobile.value)
        {
            useBottomOffcanvas.close('auth-modal');
        }

    }

});


export default useAuthModalStore;