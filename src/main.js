import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { RouterLink } from "vue-router";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/assets/sass/app.scss'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App).component("Link", RouterLink);

app.use(router);
app.use(pinia);
app.mount('#app');
