import { createApp } from 'vue'
import App from "./App.vue";
import store from './vuex/store'
import router from "./router/router";
import 'material-icons/iconfont/material-icons.css';

const app = createApp(App)
app.use(store)
app.mount('#app')