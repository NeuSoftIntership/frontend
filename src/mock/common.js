function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * (999 - 200 + 1)) + 200; // 在200到999之间随机生成区号
    const firstThree = Math.floor(Math.random() * 1000); // 生成三位数的第一个部分
    const secondFour = Math.floor(Math.random() * 10000); // 生成四位数的第二个部分
    return `(${areaCode})${firstThree}-${secondFour}`; // 返回生成的电话号码
}

export {generatePhoneNumber}