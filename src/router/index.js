import {createRouter, createWebHashHistory} from 'vue-router'

import Login from "../pages/Login.vue"
import NavSkeleton from "../pages/NavSkeleton.vue";
import ClientHome from "../components/client/ClientHome.vue";
import Add2ModifyClient from "../components/client/sub/Add2ModifyClient.vue";
import PersonOrder from "../components/client/sub/Order.vue";
import OrderDetail from "../components/client/sub/OrderDetail.vue";
import AddOrder from "../components/client/sub/AddOrder.vue";
import DispatchCenter from "../components/dispatch/sub/DispatchCenter.vue";
import AllotHome from "../components/allot/AllotHome.vue";
import RepositoryHome from "../components/repository/RepositoryHome.vue";
import DeliveryHome from "../components/delivery/DeliveryHome.vue";
import FinanceHome from "../components/finance/FinanceHome.vue";
import AddDispatchTask from "../components/dispatch/sub/Add2DetailDispatchTask.vue";
import AddAllot from "../components/allot/sub/AddAllot.vue";
import AllotStock from "../components/allot/sub/AllotStock.vue";
import TaskList from "../components/allot/sub/TaskList.vue";
import DispatchTask from "../components/allot/sub/DispatchTask.vue";
import TaskDispatchDetail from "../components/allot/sub/TaskDispatchDetail.vue";
import BillList from "../components/allot/sub/BillList.vue";
import CourierList from "../components/allot/sub/CourierList.vue";
import ReceiptRecord from "../components/allot/sub/ReceiptRecord.vue";
import CourierModify2Add from "../components/allot/sub/CourierModify2Add.vue";
import EnterRepList from "../components/repository/sub/EnterRepList.vue";
import DispatchRequestList from "../components/repository/sub/DispatchRequestList.vue";
import RequestEnterDetail from "../components/repository/sub/RequestEnterDetail.vue";
import DispatchRequestDetail from "../components/repository/sub/DispatchRequestDetail.vue";
import GoodsTypeManage from "../components/delivery/sub/GoodsTypeManage.vue";
import AllotRate from "../components/delivery/sub/AllotRate.vue";
import GoodsList from "../components/delivery/sub/GoodsList.vue";
import GoodsOfferMerchantList from "../components/delivery/sub/GoodsOfferMerchantList.vue";
import GoodsRate from "../components/delivery/sub/GoodsRate.vue";
import GoodsRequestList from "../components/delivery/sub/GoodsRequestList.vue";
import AllotSettle from "../components/finance/sub/AllotSettle.vue";
import BillBatch from "../components/finance/sub/BillBatch.vue";
import GoodsOfferMerchantSettle from "../components/finance/sub/GoodsOfferMerchantSettle.vue";
import DispatchHome from "../components/dispatch/DispatchHome.vue";
import AllotCenter from "../components/allot/sub/AllotCenter.vue";
import ClientCenter from "../components/client/sub/ClientCenter.vue";
import RepositoryCenter from "../components/repository/sub/RepositoryCenter.vue";
import Add2ModifyGoods from "../components/delivery/sub/Add2ModifyGoods.vue";
import Add2ModifyMerchant from "../components/delivery/sub/Add2ModifyMerchant.vue";
import GoodsRequestDetail from "../components/delivery/sub/GoodsRequestDetail.vue";
import GoodsOfferMerchantSettleDetail from "../components/finance/sub/GoodsOfferMerchantSettleDetail.vue";

const routes = [
    {path: '/', component: Login},
    {
        path: '/nav', component: NavSkeleton,
        children: [
            {
                path: 'client-home',
                name:'client-home',
                component: ClientHome,
                children: [
                    {
                        path: 'client-center',
                        component: ClientCenter,
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
                        name: "add-order"
                    },
                ]
            },
            {
                path: 'dispatch-home',
                component: DispatchHome,
                name: 'dispatch-home',
                children: [
                    {
                        path: 'dispatch-center',
                        component: DispatchCenter,
                        name: 'dispatch-center',
                    },
                    {
                        path: 'add2detail-dispatch',
                        component: AddDispatchTask,
                        name: 'add2detail-dispatch'
                    },
                ]
            },
            {
                path: 'allot-home',
                component: AllotHome,
                name: 'allot-home',
                children: [
                    {
                        path: 'allot-center',
                        component: AllotCenter,
                        name: 'allot-center',
                    },
                    {
                        path: "add-allot",
                        component: AddAllot,
                        name: 'add-allot'
                    },
                    {
                        path: "allot-stock",
                        component: AllotStock,
                        name: 'allot-stock'
                    },
                    {
                        path: 'allot-task-list',
                        component: TaskList,
                        name: 'allot-task-list'
                    },
                    {
                        path: 'allot--dispatch-task',
                        component: DispatchTask,
                        name: 'allot--dispatch-task'
                    },
                    {
                        path: 'allot-dispatch-task-detail',
                        component: TaskDispatchDetail,
                        name: 'allot-dispatch-task-detail'
                    },
                    {
                        path: 'allot-dispatch-bill-list',
                        component: BillList,
                        name: 'allot-dispatch-bill-list'
                    },
                    {
                        path: 'allot-courier-list',
                        component: CourierList,
                        name: 'allot-courier-list'
                    },
                    {
                        path: 'allot-courier-add2modify',
                        component: CourierModify2Add,
                        name: 'allot-courier-add2modify',
                    },
                    {
                        path: 'receipt-record',
                        component: ReceiptRecord,
                        name: 'receipt-record',
                    },
                ]
            },
            {
                path: 'delivery-home',
                component: DeliveryHome,
                name: 'delivery-home',
                // 二级路由
                children: [
                    {
                        path: 'delivery-goods-type-manage',
                        component: GoodsTypeManage,
                        name: 'delivery-goods-type-manage',
                    },
                    {
                        path: 'delivery-allot-rate',
                        component: AllotRate,
                        name: 'delivery-allot-rate',
                    },
                    {
                        path: 'delivery-goods-list',
                        component: GoodsList,
                        name: 'delivery-goods-list',
                    }
                    ,
                    {
                        path: 'delivery-goods-offer-merchant-list',
                        component: GoodsOfferMerchantList,
                        name: 'delivery-goods-offer-merchant-list',
                    },
                    {
                        path: 'delivery-goods-rate-list',
                        component: GoodsRate,
                        name: 'delivery-goods-rate-list',
                    },
                    {
                        path: 'delivery-goods-request-list',
                        component: GoodsRequestList,
                        name: 'delivery-goods-request-list',
                    },
                    {
                        path: 'delivery-goods-add2modify',
                        component: Add2ModifyGoods,
                        name: 'delivery-goods-add2modify',
                    },
                    {
                        path: 'delivery-goods-add2modify-merchant',
                        component: Add2ModifyMerchant,
                        name: 'delivery-goods-add2modify-merchant',
                    },
                    {
                        path: 'delivery-goods-request-detail',
                        component: GoodsRequestDetail,
                        name: 'delivery-goods-request-detail',
                    },
                ]
            },
            {
                path: 'finance-home',
                component: FinanceHome,
                name: 'finance-home',
                children: [
                    {
                        path: 'finance-allot-settle',
                        component: AllotSettle,
                        name: 'finance-allot-settle',
                    },
                    {
                        path: 'finance-bill-batch',
                        component: BillBatch,
                        name: 'finance-bill-batch',
                    },
                    {
                        path: 'finance-goods-offer-merchant-settle',
                        component: GoodsOfferMerchantSettle,
                        name: 'finance-goods-offer-merchant-settle',
                    },
                    {
                        path: 'finance-goods-offer-merchant-detail',
                        component: GoodsOfferMerchantSettleDetail,
                        name: 'finance-goods-offer-merchant-detail',
                    },
                ]
            },
            {
                path: 'repository-home',
                component: RepositoryHome,
                name: 'repository-home',
                children: [
                    {
                        path: 'repository-center',
                        component: RepositoryCenter,
                        name: 'repository-center'
                    },
                    {
                        path: 'enter-rep-list',
                        component: EnterRepList,
                        name: 'enter-rep-list'
                    },
                    {
                        path: 'dispatch-request-list',
                        component: DispatchRequestList,
                        name: 'dispatch-request-list'
                    },
                    {
                        path: 'rep-request-enter-detail',
                        component: RequestEnterDetail,
                        name: 'rep-request-enter-detail',
                    },
                    {
                        path: 'rep-dispatch-request-detail',
                        component: DispatchRequestDetail,
                        name: 'rep-dispatch-request-detail',
                    },
                ]
            },
        ]
    }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 全局路由守卫
// 用来实现权限的管理
router.beforeEach((to,from,next)=>{
    console.log("前置路由守卫，用来实现权限管理",to, from)
    next() // 放行
})

export default router
