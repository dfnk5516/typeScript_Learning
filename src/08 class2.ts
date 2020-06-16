interface Person {
  name : string;
  say(message : string) : void;
}
interface Programmer {
  writeCode(requirement : string) : string  
}

/* 다중 인터페이스 구현 */
class KoreanProgrammer implements Person, Programmer{
  constructor(public name : string){
    
  }
  say(message : string): void {
    console.log(message);
  }
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + '.....';
  }

  loveKimChi() {
    console.log('love~ kimchi~');
  }
}
const jay = new KoreanProgrammer('jay');