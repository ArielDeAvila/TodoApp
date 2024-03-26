import "./assets/main.scss";

import { createApp } from 'vue'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import axios from "@/plugins/Axios";
import App from './App.vue'

//PLUGINS
import vuetify from "./plugins/Vuetify";
import globalComponents from "./plugins/GlobalComponents";
import router from "./router/Index";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { optionsToast } from "./plugins/Toast";
import "floating-vue/dist/style.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)

app.config.globalProperties.mode = 'dev'


//PLUGINS
app.use(globalComponents)
app.use(vuetify)
app.use(Toast, optionsToast);

//PROJECT BASE
app.use(router)
app.use(pinia)


app.mount('#app')

const prodApi = "https://my-app/api/";
const devApi = "http://localhost:5054/api/";

app.config.globalProperties.apiUrl = app.config.globalProperties.mode == "dev" ? devApi : prodApi;

axios.defaults.baseURL = app.config.globalProperties.apiUrl