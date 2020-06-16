let score:number;
score = 30;

const score2 = 100;

let numValue : number;
let stringValue : string;
let booleanValue : boolean;
let undefinedValue: undefined;
let nullValue:null;
let objValue : object;
let symbolValue : symbol;
let anyValue : any;

symbolValue = Symbol();
// {
//   symbolValue : 'hello'
// }

let nameList:string[];
nameList = ['1', '3'];
nameList.push('33');

let user1 : {name : string, score : number};
user1 = {
  name : 'jay',
  score : 30
};

/* 항목의 개수와 타입을 미리 정의 - 무조건 두개 넣어야함*/
let tuple2 : [number, string];
let tuple3 : [number, number, number];
tuple2 = [1, 'hello'];
tuple3 = [1, 2, 3];