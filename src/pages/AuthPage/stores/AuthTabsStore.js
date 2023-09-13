import { reactive } from "vue";


const useAuthTabsStore = reactive({
    Tab: 1,
    openTab(Tab)
    {
        this.Tab = Tab;
    },

});


export default useAuthTabsStore;