// <4>, <5>
let btn = document.querySelector('#btn');
console.log('btn: ', btn);
btn.addEventListener('click', function() {
    alert("bye, world");
});

// <2>
// //모든 html을 파싱한 후 실행됨. 외부컨텐츠 (css, images 등) 모두 실행이 될때까지 기다려야하므로 비효율적.
// window.onload = function(){
//     let btn = document.querySelector('#btn');
//     console.log('btn: ', btn);
//     btn.addEventListener('click', function() {
//         alert("bye, world");
//     });
// };

// <3>
//모든 html을 파싱한 후 실행됨. 외부컨텐츠 제외.
// document.addEventListener('DOMContentLoaded', function() {
//     let btn = document.querySelector('#btn');
//     console.log('btn: ', btn);
//     btn.addEventListener('click', function() {
//         alert("bye, world");
//     });
// });