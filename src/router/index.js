import {createRouter,createWebHashHistory}from 'vue-router'

import Login from "../pages/Login.vue"
import NavSkeleton from "../pages/NavSkeleton.vue";
import ClientHome from "../components/client/ClientHome.vue";
import Add2ModifyClient from "../components/client/Add2ModifyClient.vue";
import PersonOrder from "../components/client/PersonOrder.vue";
import OrderDetail from "../components/client/OrderDetail.vue";
import AddOrder from "../components/client/AddOrder.vue";
import DispatchHome from "../components/dispatch/DispatchHome.vue";
import AllotHome from "../components/allot/AllotHome.vue";
import RepositoryHome from "../components/repository/RepositoryHome.vue";
import DeliveryHome from "../components/delivery/DeliveryHome.vue";
import FinanceHome from "../components/finance/FinanceHome.vue";
import AddDispatchTask from "../components/dispatch/Add2DetailDispatchTask.vue";

const routes = [
    { path: '/', component: Login },
    {
        path: '/nav', component: NavSkeleton,
        children:[
            {
                path: 'client-home',
                component: ClientHome,
            },
            {
                path: 'client-add2modify',
                component: Add2ModifyClient
            },
            {
                path: 'client-orders',
                component: PersonOrder
            },
            {
                path: 'order-details',
                name: "order-details",
                component: OrderDetail
            },
            {
                path: 'add-order',
                component: AddOrder,
                name:"add-order"
            },
            {
                path: 'dispatch-home',
                component: DispatchHome,
                name: 'dispatch-home'
            },
            {
                path: 'allot-home',
                component: AllotHome,
                name: 'allot-home'
            },
            {
                path: 'repository-home',
                component: RepositoryHome,
                name: 'repository-home'
            },
            {
                path: 'delivery-home',
                component: DeliveryHome,
                name: 'delivery-home'
            },
            {
                path: 'finance-home',
                component: FinanceHome,
                name: 'finance-home'
            },
            {
                path: 'add2detail-dispatch',
                component: AddDispatchTask,
                name: 'add2detail-dispatch'
            }
        ]
    }
]

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
