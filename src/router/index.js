import {createRouter,createWebHashHistory}from 'vue-router'

import Login from "../pages/Login.vue"
import NavSkeleton from "../pages/NavSkeleton.vue";

const routes = [
    { path: '/', component: Login },
    {
        path: '/Nav', component: NavSkeleton
    }
]

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
