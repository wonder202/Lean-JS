// node로 실행하는 법 -> 인프런 해당 강의 노트에 있음.
// 1. 각각 지정해서 가져오기.
// const {perfectScore, sum, avg, sub} = require('./math.js');
// console.log('perfectScore',perfectScore);
// console.log('sum',sum(80,10));
// console.log('avg',avg(80,90));
// console.log('sub1',sub(20,10));

// 2. 한번에 가져오기.
const math = require('./math.js');
console.log('perfectScore',math.perfectScore);
console.log('sum',math.sum(80,10));
console.log('avg',math.avg(80,90));
console.log('sub1',math.sub(20,10));