import { reactive } from "vue";

const setBodyOverFlow = (value) =>
{

    document.documentElement.classList.add(value);

};

const removeBodyOverFlow = (value) =>
{

    document.documentElement.classList.remove(value);

};

const useBaseModel = reactive({
    isOpen: false,
    id: null,
    open(id)
    {
        setBodyOverFlow('overflowHidden');

        this.isOpen = true;
        this.id = id;
    },
    close(id)
    {
        removeBodyOverFlow('overflowHidden');

        this.isOpen = false;
        this.id = id;
    },
});

export default useBaseModel;