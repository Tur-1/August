import { reactive } from "vue";

const useBaseModel = reactive({
    isOpen: false,
    id: null,
    open(id)
    {
        this.isOpen = true;
        this.id = id;
    },
    close(id)
    {
        this.isOpen = false;
        this.id = id;
    },
});

export default useBaseModel;