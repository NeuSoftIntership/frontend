import fetchMock from 'fetch-mock';
import Mock from 'mockjs';

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
function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * (999 - 200 + 1)) + 200; // 在200到999之间随机生成区号
    const firstThree = Math.floor(Math.random() * 1000); // 生成三位数的第一个部分
    const secondFour = Math.floor(Math.random() * 10000); // 生成四位数的第二个部分
    return `(${areaCode})${firstThree}-${secondFour}`; // 返回生成的电话号码
}

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


function randInt1() {
    return "分级" + Math.floor(Math.random() * 1000)+ "_1"
}

function randInt2() {
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
                'type':randInt1,
                'subList|1-5':[
                    // 二级分类
                    {
                        'type': randInt2,
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