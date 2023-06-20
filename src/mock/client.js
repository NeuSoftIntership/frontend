import fetchMock from 'fetch-mock';
import Mock from 'mockjs';
import {generatePhoneNumber} from "./common.js";
// random 已经过时了，引入报错
// import { Random as MockRandom } from "mockjs/src/mock/random/index.js";

// 绑定映射关系
// Mock.mock({
//     "status": true,
//     'data|10': [{
//         'id|+1': "@id",
//         'phone': generatePhoneNumber,
//         'name': '@cname',
//         'age|18-60': 1,
//         'address':"@region",
//         'email': /\w{5,10}@(163|qq|gmail)\.com/
//     }]
// })
// 电话号码生成函数


// 模拟fetch请求
fetchMock.get('/client/get-client', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|10': [{
            'id|+1': "@id",
            'phone': generatePhoneNumber,
            'name': '@cname',
            'age|18-60': 1,
            'address':"@region",
            'email': /\w{5,10}@(163|qq|gmail)\.com/
        }]
    })
});

// 发起fetch请求，请求client-list，这里没有具体给出
// fetch('/client/get-client')
//     .then(res => res.json())
//     .then(data => console.log('data', data));

// 获取某个客户的订单，可以使分页查询
fetchMock.get('/client/get-client-orders', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|10': [{
            'id|+1': "@id",
            'address':"@region",
            'receiver': '@cname',
            'phone': generatePhoneNumber,
            'orderStatus|1-8': 1,
        }]
    })
});


function randClass1() {
    return "分级" + Math.floor(Math.random() * 1000)+ "_1"
}

function randClass2() {
    return "分级" + Math.floor(Math.random() * 1000)+ "_2"
}

function randGoods() {
    return "商品" + Math.floor(Math.random() * 1000)
}
// 商品分类
fetchMock.get('/client/get-goods-class', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|10': [
            // 表示的是第一级别分类
            {
                'type':randClass1,
                'subList|1-5':[
                    // 二级分类
                    {
                        'type': randClass2,
                        'subList|1-5': [
                            // 具体的商品
                            {
                                "name": randGoods,
                                "id": "@id",
                                "price|200-10000": 20,
                                "count|99-9999": 20,
                            }
                        ]
                    }
                ]
            }
        ]
    })
});

// 获取某个订单的详细信息
fetchMock.get('/client/get-order-detail', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data': {
            "clientName": '@cname',
            "billNeed|2": true,
            "orderDate": '@date(yyyy-MM-dd hh:mm:ss)',
            "address": '@region',
            'orderStatus|1-8': 1,
            'receiver': '@cname',
            'phone': generatePhoneNumber,
            'remark|10-50': '@cword',
            "goodsMap": {
                "order_list|2-10": [
                    {
                        name: randGoods,
                        "price|200-1000": 1,
                        class1: randClass1,
                        class2: randClass2,
                        "buyC|2-20": "",
                        "perTotalPrice|100-10000": 1,
                    }
                ],
                "total|1000-99999": 0
            }
        }
    })
});
