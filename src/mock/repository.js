// 对应的是库房
import fetchMock from "fetch-mock";
import Mock from "mockjs";
import {generatePhoneNumber, getRandomChinese} from "./common.js";

function randGoods(){
    return '商品_' + getRandomChinese(2)
}

// 获取rep货物
fetchMock.get('/repository/get-rep-goods-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id|+1': "@id",
            'goodsName':randGoods,
            'count|5-1000': 1,
            'safeCount|200-300': 1,
            'warnCount|100-200': 1,
        }]
    })
});

// 获取入库列表
fetchMock.get('/repository/get-rep-request-enter-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'orderId|+1': "@id",
            'lackId': '@id',
            'requestStatus': 1,
        }]
    })
});


function randClass1() {
    return "分级" + Math.floor(Math.random() * 1000)+ "_1"
}

function randClass2() {
    return "分级" + Math.floor(Math.random() * 1000)+ "_2"
}

// 获取某个入库申请的详情
fetchMock.get('/repository/get-rep-request-enter-detail', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data': {
            "orderId": '@id',
            "lackId": '@id',
            "requestDate": '@date(yyyy-MM-dd hh:mm:ss)',
            'requestStatus': 1,
            "goodsMap": {
                "order_list|2-10": [
                    {
                        name: randGoods,
                        "price|200-1000": 1,
                        class1: randClass1,
                        class2: randClass2,
                        "count|2-20": 0,
                        "perTotalPrice|100-10000": 1,
                    }
                ],
                "total|1000-99999": 0
            }
        }
    })
});

function randStation(){
    return getRandomChinese(5) + "站"
}
// 获取入库列表
fetchMock.get('/repository/get-rep-dispatch-request-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'address': "@region",
            'receiver': '@id',
            'allot': randStation,
            'orderStatus|1-8': 1,
        }]
    })
});
