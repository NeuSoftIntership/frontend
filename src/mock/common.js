function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * (999 - 200 + 1)) + 200; // 在200到999之间随机生成区号
    const firstThree = Math.floor(Math.random() * 1000); // 生成三位数的第一个部分
    const secondFour = Math.floor(Math.random() * 10000); // 生成四位数的第二个部分
    return `(${areaCode})${firstThree}-${secondFour}`; // 返回生成的电话号码
}

function getRandomChinese(len = 1) {
    const randomUnicode = [];
    for (let i = 0; i < len; i++) {
        randomUnicode.push(Math.round(Math.random() * (0x9fa5 - 0x4e00) + 0x4e00))
    }
    return String.fromCharCode(...randomUnicode);
}


export {generatePhoneNumber, getRandomChinese}