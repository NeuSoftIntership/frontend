import fetchMock from 'fetch-mock';
import Mock from 'mockjs';
import {generatePhoneNumber} from "./common.js";

// 请求调度信息
fetchMock.get('/dispatch/get-dispatch-info', {
    status: 200,
    body: Mock.mock({
        "status": true,
        'data|10': [{
            'id|+1': "@id",
            'address':"@region", // 送货地址
            'receiver': '@cname',  // 接收人
            'phone': generatePhoneNumber, // 接收人电话
            'orderStatus|1-8': 1, // 订单状态
        }]
    })
});