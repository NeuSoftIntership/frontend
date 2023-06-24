// 获取某个客户的订单，可以使分页查询
import fetchMock from "fetch-mock";
import Mock from "mockjs";
import {generatePhoneNumber, getRandomChinese} from "./common.js";
import {randClass1, randClass2, randGoods} from "./client.js";
import {randStation} from "./allot.js";

function randName(){
    return getRandomChinese(5)
}

// 获取分类1
fetchMock.get('/delivery/get-class1', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': "@id",
            'name':randName,
            'subCount|2-20': 1,
        }]
    })
});

fetchMock.get('/delivery/get-class2', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': "@id",
            'name':randName,
            'subCount|2-20': 1,
        }]
    })
});

fetchMock.get('/delivery/get-goods-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': "@id", // 商品代码
            'price|100-10000': 100,  // 商品价格
            'goodsName': randName,
        }]
    })
});

fetchMock.get('/delivery/get-merchant-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': "@id", // 商品代码
            'address': '@city(true)',
            'merchantName': randName,
            'phone': generatePhoneNumber,
            'contact': "@cname",
        }]
    })
});

fetchMock.get('/delivery/get-goods-request-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': "@id", // 请求单号
            'idTarget': "@id", // 请求单号
            'requestStatus': 1,
        }]
    })
});

// goodsRequestDetail
fetchMock.get('/delivery/get-goods-request-detail', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data': {
            'id': "@id", // 请求单号
            'idTarget': "@id", // 请求单号
            'requestStatus': 1,
            'requestDate':'@date(yyyy-MM-dd hh:mm:ss)',
            'requestGoodsList|5-10':[
                {
                    name: randGoods,
                    "price|200-1000": 1,
                    class1: randClass1,
                    class2: randClass2,
                    "buyC|2-20": "",
                    "perTotalPrice|100-10000": 1,
                }
            ]
        }
    })
});

// GoodsRate
fetchMock.get('/delivery/get-goods-rate-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': "@id", // 请求单号
            'name': randGoods, // 请求单号
            'soldCount|1-1000': 1,
            'price|1000-10000': 1,
            'totalPerGoods|10000-1000000': 1,
        }]
    })
});

// AllotRate
fetchMock.get('/delivery/get-allot-rate-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'name': randStation, // 分站名称
            'orderCount|1-1000': 1,
            'goodsSoldCount|1-1000': 1,
            'moneySubmit|999-1000000': 1,
        }]
    })
});