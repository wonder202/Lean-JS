// * as를 쓰면 math.js안의 모든 변수를 다시 변수명을 붙여 한번에 가져옴.
// import * as math from './math.js';
// console.log('perfectScore',math.perfectScore);
// console.log('sum',math.sum(80,10));
// console.log('avg',math.avg(80,90));

// 각각 가져올 수도 있음.
// import {perfectScore, sum, avg} from './math.js';
// console.log('perfectScore',perfectScore);
// console.log('sum',sum(80,10));
// console.log('avg',avg(80,90));

// export default로 지정 된 변수를 가져옴.
// 꼭 모듈 변수명을 따를 필요는 없음, 다르게 해도 나옴.
// export default 방법 1.
// import sub1 from './math.js';
// console.log('sub1',sub1(20,10));

// export default 방법 2.
import math from './math.js';
console.log('perfectScore',math.perfectScore);
console.log('sum',math.sum(80,10));
console.log('avg',math.avg(80,90));
console.log('sub1',math.sub(20,10));