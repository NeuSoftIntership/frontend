import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap.css"
// 需要引入才能有提供的组件的点击事件
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const app= createApp(App)
app.use(router)
app.mount('#app')
