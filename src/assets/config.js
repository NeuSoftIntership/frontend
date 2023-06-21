const fetchWithIpPort = async (url, options = {}, _ip_port = '') => {
    const newUrl = `${_ip_port}${url}`;
    const newOptions = {...options};
    const response = await fetch(newUrl, newOptions);
    return response;
};

const orderStatusMap = {
    "1": "进行中",
    "2": "待调整",
    "3": "待出库",
    "4": "待分配",
    "5": "代缴款",
    "6": "待入库",
    "7": "缺货中",
    "8": "出库",
}

const billStatusMap = {
    "1": "待收款",
    "2": "已完成",
}

const goodsRequestEnterStatus = {
    '1': "待入库"
}

export  {fetchWithIpPort, orderStatusMap as OrderStatusMap, billStatusMap as BillStatusMap, goodsRequestEnterStatus as GoodsRequestEnterStatus}
// 示例使用：
const result = await fetchWithIpPort('/client/get-client',"","");
console.log("???", result)



