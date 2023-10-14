// 1. exports (각각의 객체로 내보내기)
// exports. perfectScore = 100;

// // 합계
// exports. sum = (num1, num2) => {
//     return num1 + num2;
// };

// // 평균
// exports. avg = (num1, num2 ) => {
//     return (num1 + num2) / 2;
// };

// // 빼기
// exports. sub = (num1, num2) => {
//     return num1 - num2;
// };

//2. module.exports (하나의 객체로 내보내기)
const perfectScore = 100;

// 합계
const sum = (num1, num2) => {
    return num1 + num2;
};

// 평균
const avg = (num1, num2 ) => {
    return (num1 + num2) / 2;
};

// 빼기
const sub = (num1, num2) => {
    return num1 - num2;
};

module.exports= {
    perfectScore, 
    sum, 
    avg, 
    sub
}