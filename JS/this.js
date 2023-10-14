// this는 호출메소드.
// 기본적으로 window를 호출하는 전역객체이다.
// let person = {
//     fullname    : '자바스크립트',
//     age         : 20,
//     This: function(){
//         console.log(this);
//         console.log(this === person);
//     },
// };
// // person.This();
// let printThis = person.This;
// printThis();

// 'use strict'; //기본값을 window가 아닌 undefined으로.
// function printThis() {
//     console.log(this);
// };
// printThis();

let person = {
    name    : '김민지',
    printThis: function () {
        console.log(this);
    }
};
person.printThis();

// let person1 = {
//     name    : '봄봄',
//     age     : 12,
//     this    : printThis,
// };
// person1.this();

let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    console.log(this);
});

// //ES5 bind - this 설정
// function printThis() {
//     console.log(this); //window반환
// };
// let person = {
//     name    : '김민지',
//     age     : 16,
// };
// let person1 = {
//     name    : '홍민지',
//     age     : 19,
// };
// let printPerson = printThis.bind(person);
// let printPerson1 = printThis.bind(person1);
// printPerson();
// printPerson1();

// let person = {
//     name    : '김민지',
//     age     : 16,
//     info    : function (){
//         setTimeout(() => { //화살표함수(=>)로 상위 스코프(범위)를 물려받는다.
//             console.log(this);
//         }, 2000);
//     },
// };
// person.info();

// // setTimeout의 파라미터는 콜백함수와 시간인자.
// setTimeout(function() {
//     console.log("hello");
// }, 3000);