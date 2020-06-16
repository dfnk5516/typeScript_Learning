interface Person {
  name : string;
  say(message : string) : void;
}
interface Programmer {
  writeCode(requirement : string) : string  
}

abstract class Korean implements Person {
  /* 하위 타입에 구현하는거 떠넘기기 */
  public abstract jumin : number;

  constructor(public name : string) {

  }
  say(msg : string) {
    console.log(msg);
  }

  /* 하위 타입에 구현하는거 떠넘기기 */
  abstract loveKimchi() : void;
}

class KoreanProgrammer1 extends Korean implements Programmer{
  constructor(public name : string, public jumin : number){
    super(name);
  }
  say(message : string): void {
    console.log(message);
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + '.....';
  }
  loveKimchi(): void {
    throw new Error("Method not implemented.");
  }
}
const jay1 = new KoreanProgrammer1('jay', 2222);