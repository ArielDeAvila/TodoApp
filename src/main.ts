import "./assets/main.scss";

import { createApp } from 'vue'


import App from './App.vue'

//PLUGINS
import vuetify from "./plugins/Vuetify";
import globalComponents from "./plugins/GlobalComponents";
import router from "./router/Index";

const app = createApp(App)

//PLUGINS
app.use(vuetify)
app.use(globalComponents)
app.use(router)


app.mount('#app')
