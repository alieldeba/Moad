import { createApp, config } from "vue";
import App from "./App.vue";
import router from "./router";

import "./style.css";

config.devtools = true;

const app = createApp(App);

app.use(router);

app.mount("#app");
