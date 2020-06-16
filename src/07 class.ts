interface User {
  name : string;
}
interface Product {
  id : string;
  price : number;
}
interface Store {
  [key : string] : Product;
}

class Cart {
  /* protected 는 이 클래스를 상속 받은 클래스에서 접근 가능 */
  // protected user : User;
  // private store : object;

  constructor(protected user: User, private store : Store = {}) {
    //this.user = user;
    // this.store = {};
  }

  public put(id:string, product:Product) {
    console.log(this.user.name);
    this.store[id] = product;
  }
  public get(id:string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart{
  addPromotion(){
    console.log(this.user.name);
  }
}

const cart2 = new PromotionCart({ name : 'john' });
cart2.addPromotion();
const cartJohn = new Cart({ name : 'john' });
const cartJay = new Cart({ name : 'jay' });
