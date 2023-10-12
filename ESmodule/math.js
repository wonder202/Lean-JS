export const perfectScore = 100;

// // 방법 1.
// // 합계
// export const sum = (num1, num2) => {
//     return num1 + num2;
// };

// // 평균
// export const avg = (num1, num2 ) => {
//     return (num1 + num2) / 2;
// };

// // 빼기
// const sub = (num1, num2) => {
//     return num1 - num2;
// };
// //기본 함수 지정, 모듈 당 하나만 가능.
// export default sub;

// 방법 2.
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
//기본 함수 지정, 모듈 당 하나만 가능.
export default {
    perfectScore,
    sum,
    avg,
    sub
};