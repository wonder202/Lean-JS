// async-await이란? js 비동기처리 패턴 중 하나. 비동기 로직을 읽기쉽게 작성하기위한 것.
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // userId가 1일때만 넘기게 함
        const user = userId === 1 ?
                        { id: userId, name: 'wonder'} : null;
        resolve(user)
      } catch (error) {
        reject(error)
      }
    }, 1000);  
  });
}

// 기존 로직를 사용한 비동기작업 코드
// .then, .cath
function runPromise() {
  getUser(1)
    .then(user => {
      if (user) {
        console.log('user:', user);
      } else {
        console.log('user 없음');

      }
    })
}

// async-await를 사용한 비동기작업 코드
// try, catch
// async - 비동기 작업을 처리하는 함수 정의
// await - 비동기 작업의 결과를 기다리는 역할
async function runAsyncAwait() {
  try {
    const user = await getUser(1);
    if (user) {
      console.log('user:', user);
    } else {
      console.log('user 없음');
    }
  } catch (error) {
    console.log('error:', error);
  }
}

// 선언한 함수의 리턴 값은 프로미스 객체이다.
// runPromise();
runAsyncAwait();