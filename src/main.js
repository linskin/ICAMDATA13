import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'
import App from './App.vue'
import './assets/global.css'
import router from "@/router";
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')