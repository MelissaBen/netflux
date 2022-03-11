import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";
import App from "./App.vue";
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App);

app.use(createStore(store));
app.use(router);
app.use(BootstrapVue3);

app.mount("#app");