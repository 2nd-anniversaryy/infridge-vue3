import { createApp } from "vue";

import App from "./App.vue";
import { setupStore } from "./stores";
import router from "./router";

const app = createApp(App);

setupStore(app);
app.use(router);
app.mount("#app");
