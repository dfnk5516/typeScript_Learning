/* 타입의 파라미터화(타입 변수) */
function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

createPromise<string>("1", 100).then((v) => console.log(v));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
  return [v, v2];
}

const t1 = createTuple2("user1", 1000);
/* Type 확인 */
// t1[0].
// t1[1].

function createTuple<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
  return [v, v2, v3];
}

