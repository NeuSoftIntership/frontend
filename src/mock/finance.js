// 获取某个客户的订单，可以使分页查询
import fetchMock from "fetch-mock";
import Mock from "mockjs";
import {randStation} from "./allot.js";
import {generatePhoneNumber, getRandomChinese} from "./common.js";
import {randGoods} from "./client.js";

// billBatch
fetchMock.get('/finance/get-bill-batch-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'start|1-1000': 1, // 分站名称
            'stop|1000-100000': 1,
            'batchId': '@id',
            'allot': randStation,
            'status|1-4': 1
        }]
    })
});

function randMerchant(){
    return '供货商_' + getRandomChinese(5)
}

// merchant-settle
fetchMock.get('/finance/get-merchant-settle-list', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'name': randMerchant, // 供货商
            'address': '@city(true)',
            'contact': '@cname',
            'phone': generatePhoneNumber,
        }]
    })
});

fetchMock.get('/finance/get-merchant-settle-detail', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'name': randGoods, // 商品名
            'price|100-1999': 0,
            'countSettle|100-1999': 0,
            'moneySettle|100-1999': 0,
        }]
    })
});

fetchMock.get('/finance/get-allot-settle', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|5-10': [{
            'id': '@id',
            'name': randStation,
            'countTran|100-19999': 0,
            'moneyReceive|100-1999': 0,
            'countRefund|100-1999': 0,
            'moneyRefund|100-1999': 0,
            'moneyReal|100-1999': 0,  // 实收款项
        }]
    })
});