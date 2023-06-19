const fetchWithIpPort = async (url, options = {}, _ip_port = '') => {
    const newUrl = `${_ip_port}${url}`;
    const newOptions = {...options};
    const response = await fetch(newUrl, newOptions);
    return response;
};
export default fetchWithIpPort
// 示例使用：
const result = await fetchWithIpPort('/client/get-client',"","");
console.log("???", result)

