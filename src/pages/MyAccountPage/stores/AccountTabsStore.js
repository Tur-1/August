
import { reactive } from "vue";

const AccountTabsStore = reactive({
    id: 'account-settings',
    openTab(id)
    {
        this.id = id;
    },

});





export default AccountTabsStore;