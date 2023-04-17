import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import TypeNav from "@/pages/Home/TypeNav/TypeNavComponent.vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.component("TypeNav", TypeNav).use(router).use(createPinia()).mount("#app");
