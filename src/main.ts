import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import "./styles/main.css"

createApp(App).use(router).mount("#app")
