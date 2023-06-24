// 获取某个客户的订单，可以使分页查询
import fetchMock from "fetch-mock";
import Mock from "mockjs";
import {generatePhoneNumber, getRandomChinese} from "./common.js";

function randStation(){
    return getRandomChinese(5) + "站"
}

// 获取分站列表
fetchMock.get('/allot/get-allot-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id|+1': "@id",
            'station':randStation,
            'phone': generatePhoneNumber,
        }]
    })
});

// 获取订单
fetchMock.get('/allot/get-allot-order', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id|+1': "@id",
            'address': '@region',
            'receiver':'@cname',
            'phone': generatePhoneNumber,
            'orderStatus|1-8': 1,
            'courier': '@cname',
            'courierPhone': generatePhoneNumber,
        }]
    })
});

// 获取发票
fetchMock.get('/allot/get-allot-bill-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'orderId|+1': "@id",
            'billId|+1': "@id",
            'courier': '@cname',
            'pay|800-10000':0,
            'orderStatus|1-8': 1,
            'billStatus|1-2': 0,
        }]
    })
});

// 获取某个站的配送员
fetchMock.get('/allot/get-allot-courier-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id|+1': "@id",
            'courier': '@cname',
            'allot': randStation,
            'phone': generatePhoneNumber,
            'enrollTime':'@date(yyyy-MM-dd hh:mm:ss)',
            'name': '@cname',
        }]
    })
});

export {randStation}