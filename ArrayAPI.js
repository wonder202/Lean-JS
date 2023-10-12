"use strict";

//map()----------------------------------------------------------------------------------------
// = 배열 안의 모든 요소에 대해 주어진 함수식으로 호출한 결과를 바탕으로 새로운 배열을 반환한다.
// const number = [1, 2, 3, 4];

// // 방법1. 화살함수
// // const result = number.map((number) => number * 2);
// // console.log(result); // [2, 4, 6, 8];

// // 방법2.
// // const result = number.map(function(number) {
// //     return number * 2;
// // });
// // console.log(result); // [2, 4, 6, 8];

// 클래스 선언
// class Student {
//     constructor(name, KoreanScore, englishScore, mathScore){
//         this.name = name
//         this.KoreanScore = KoreanScore
//         this.englishScore = englishScore
//         this.mathScore = mathScore
//     }
// };

// const student1 = new Student('홍길동', 100, 80, 40);
// const student2 = new Student('이견우', 50, 60, 20);
// const student3 = new Student('홍견우', 90, 70, 80);

// const students = [student1, student2, student3];

// // 1. 정석
// const name = students.map((student) => {
//     return student.name;
// });
// console.log('영어점수:', name);

// // 2. 단축방법
// // (1)
// const EnScores = students.map((student) => student.englishScore);
// console.log('영어점수:', EnScores);
// // (2)
// console.log(
//     '영어점수:',
//     students.map((student) => student.englishScore)
// );

// 모듈을 사용한 map()----------------------------------------------------------------------------------------
// import {numbers, students} from './ArrayData.js';

// const result = numbers.map((number) => number * 2);
// console.log(result); // [2, 4, 6, 8];

// console.log(
//     '영어점수:',
//     students.map((student) => student.englishScore)
// );

// console.log(
//     '학생 이름:',
//     students.map((student) => student.name)
// );

// 모듈을 사용한 some()----------------------------------------------------------------------------------------
// = 배열 안의 요소 중 주어진 판별 함수를 통과하는 것이 있는지 순환하며 테스트한다.
// import {numbers, students, fruits} from './ArrayData.js';

// // 1. 정석
// console.log(
//     '과일 중에 배가 있나요?',
//     fruits.some((fruit) => {
//         return fruit === '배'; 
//     })
// );

// // 2. 단축
// console.log(
//     '과일 중에 배가 있나요?',
//     fruits.some((fruit) => fruit === '배')
// ); //true

// console.log(
//     '숫자 중 7이상이 있나요?',
//     numbers.some((number) => number >= 7)
// ); //false

// console.log(
//     '수학점수가 100점 이상인 학생이 있나요?',
//     students.some((student) => student.mathScore >= 100)
// ); //false

// console.log(
//     '영어점수가 70점 미만인 학생이 있나요?',
//     students.some((student) => student.englishScore < 70)
// ); //true

// 모듈을 사용한 every()----------------------------------------------------------------------------------------
// = 배열 안의 모든 요소가 판별 함수를 통과하는지 순환하며 테스트한다.
// import {numbers, students, fruits1} from './ArrayData.js';

// console.log(
//     '모든 과일은 사과인가요?',
//     fruits1.every((fruit1) => fruit1 === '사과')
// ); //false

// console.log(
//     '모든 숫자가 5미만 인가요?',
//     numbers.every((number) => number < 5)
// ); //true

// console.log(
//     '학생들의 국어 점수가 모두 50점 이상인가요?',
//     students.every((student) => student.KoreanScore >= 50)
// ); //true

// 모듈을 사용한 filter()----------------------------------------------------------------------------------------
// = 말그대로 필터링. 배열 안의 요소 중 판별 함수를 통과하는 것들만 모아 새로운 배열로 반환한다.
// import {numbers, students} from './ArrayData.js';

// console.log(
//     '짝수인 숫자:',
//     numbers.filter((number) => number % 2 === 0) //2로 나누었을때 나머지가 0이면 짝수.
// ); //[2, 4]

// console.log(
//     '홀수인 숫자:',
//     numbers.filter((number) => number % 2 === 1) //2로 나누었을때 나머지가 1이면 홀수.
// ); //[1, 3]

// console.log(
//     '국어 점수가 90점 이상인 학생:',
//     students.filter((student) => student.KoreanScore >= 90)
// ); 
//(2) [Student, Student]
// 0: Student {name: '홍길동', KoreanScore: 100, ...}
// 1: Student {name: '홍견우', KoreanScore: 90, ...}

// 모듈을 사용한 reduce()----------------------------------------------------------------------------------------
// = 배열 안의 각 요소에 대해 주어진 reducer함수를 실행하고, 하나의 결과값을 반환한다.
import {numbers, fruits} from './ArrayData.js';

// (1) 누적값(acc)      - 변수로 선언된 배열 안 요소가 주어진 판별 함수 통과 후 누적된 결과 값.
// (2) 현재값(cur)      - 변수로 선언된 배열 안 요소의 원래 값.
// (3) 현재index(idx)   - 변수로 선언된 배열 안 위치, 몇번째 요소인지.
// (4) 원본배열(src)    - 변수로 선언된 배열.

// const result = numbers.reduce((acc, cur, idx, src) => {
//     console.log('acc:', acc, 'cur:', cur, 'idx:', idx, 'src:', src)
//     return acc + cur; //배열 안 요소의 합계
// }, 0); //0은 acc초기값이다.
// console.log('result:', result);

console.log('result:', fruits);
const result = fruits.reduce((acc, cur) => {
    //중복된 값을 제거하기 위해, 먼저
    if(acc.includes(cur) === false) { //중복된 값이 포함해있는지 확인, 없다면(false)
        acc.push(cur); // 누적배열에 추가.
        //includes()는 값이 이미 포함되어있다면 중복된 값은 패스하고 다음 값으로 넘어간다.
    }
    return acc;
}, []); //[]은 acc초기값이다.
console.log('result:', result);