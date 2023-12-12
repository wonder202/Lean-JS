// Promise란? 비동기 작업을 처리하는 객체.
// resolve: 정상적인 처리 결과 반환.
// reject : 정상적인 처리가 되지않은 결과 반환.
// 프로미스 객체 생성
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 처리(콜백함수) ex)
  setTimeout(() => {
    const text = prompt('"hello"를 입력해주면 선물(Promise)을 줄게.')
    if(text === 'hello') {
      resolve('present')
    } else {
      reject('error')
    }
  }, 2000);
});

// pending - 처리대기 상태
// fullfilled - 정상적으로 이행된 상태 
// rejected - 정상적으로 이행되지 못한 상태 
myPromise
// 비동기 작업이 정상적으로 처리된 경우
// .then이라는 메소드의 콜백함수를 통해 결과를 확인 
  .then((result) => {
    console.log('result:', result);
  })
  // 비동기 작업이 처리되지 못한 경우
  // .catch라는 메소드를 통해 결과를 확인
  .catch((err) => {
    console.log('err:', err);
  })
  // .finally 비동기 작업의 결과에 상관없이 호출되는 콜백함수 정의
  .finally(() => {
    console.log('finally');
  })