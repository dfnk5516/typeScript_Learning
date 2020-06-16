/* 상수들의 집합을 정의 - 회원의 등급이나 player의 종류 */
/* 숫자 직접 지정 권장 */
enum StarbucksGrade {
  // WELCOME = 0, 
  // GREEN = 1,
  // GOLD = 2,
  WELCOME = "WELCOME", 
  GREEN = "GREEN",
  GOLD = "GOLD",
}

function getDiscount(v : StarbucksGrade):number{
  switch(v){
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

// console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade.GREEN === "GREEN");
console.log(StarbucksGrade);
console.log(StarbucksGrade["GREEN"]);
console.log(StarbucksGrade.GREEN);
console.log(getDiscount(StarbucksGrade["GREEN"]));