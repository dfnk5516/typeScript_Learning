/* 인터페이스 : 하나의 타입 정의한다고 생각해 */
/* 행위 - method 정의 */
interface TV {
  turnOn() :boolean;
  turnOff() : void;
}

const myTV: TV = {
  turnOn(){
    return true;
  },
  turnOff(){
  }
}

function tryTurnOn(tv : TV) {
  tv.turnOn()
}
tryTurnOn(myTV);

/* 행위 말고 속성만 기술하는것도 많이 씀 */
interface Cell {
  row : number;
  col : number;
  /* optional 설정 - 없어도 돼! */
  piece? : Piece;
}
interface Piece {
  /* move(Cell, Cell), return type : boolean */
  move(from : Cell, to : Cell) : boolean; 
}

function createBoard() {
  const cells : Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ row, col });
    }
  }
  return cells;
}

interface SignUp {
  email : string;
  id : string;
  password : string;
}

function ajaxSignup(data : SignUp){

}

const board = createBoard();
board[0].piece = {
  move(from : Cell, to : Cell){
    return true;
  }
}