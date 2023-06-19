import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap.css"
// 导入 mock
import "./mock/index.js"

// 需要引入才能有提供的组件的点击事件
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const app= createApp(App)
import fetchWithIpPort from "./assets/config.js"
// app.config.globalProperties.$myGlobalObject = {};
// 全局注册自定义的fetch
app.config.globalProperties.$fetchWithIpPort = fetchWithIpPort
app.use(router)
app.mount('#app')