function add(x : number, y : number): number {
  return x + y;
}
const result = add(1, 2);

/* 기본값 설정 가능 */
// function buildUserInfo(name? : string = "-", email? : string = "-") {
function buildUserInfo(name = "-", email = "-") {
  return { name, email }
}
const user = buildUserInfo()
console.log(user);

// const add2 = (a : number, b : number):number => a + b;
const add2 = (a : number, b : number) => a + b;

interface Storage {
  a : string;
}
interface ColdStorage {
  b : string;
}

function store(type : "통조림") : Storage
function store(type : "아이스크림") : ColdStorage

/* Union Type */
function store(type : "통조림" | "아이스크림") {
  if (type === "통조림"){
    return { a : "통조림" }
  }
  else if (type === "아이스크림") {
    return { b : "아이스크림" }
  }
  else {
    throw new Error('unsupported');
  }
}

const s = store('통조림');
s.a
