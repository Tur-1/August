

import { reactive, ref } from "vue";

import { defineStore } from 'pinia'


export const useAddressStore = defineStore('AddressStore', () =>
{

    const editMode = ref(false);
    let addresses = reactive([]);
    const address_id = reactive({
        id: null,
        index: null
    });
    function reset()
    {
        addresses = reactive([]);

    }
    function enableEditMode()
    {
        editMode.value = true;
    }
    function desableEditMode()
    {
        editMode.value = false;
    }

    return {
        reset,
        addresses,
        editMode,
        address_id,
        enableEditMode,
        desableEditMode,
    };
});

export default useAddressStore;