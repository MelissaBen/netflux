import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";
import App from "./App.vue";
import Default from './layout/Default.vue'
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/responsive.css";
const app = createApp(App);
app.component('default-layout', Default);
app.use(createStore(store));
app.use(router);

app.mount("#app");