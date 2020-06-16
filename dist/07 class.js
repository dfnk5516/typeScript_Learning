class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    put(id, product) {
        console.log(this.user.name);
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        console.log(this.user.name);
    }
}
const cart2 = new PromotionCart({ name: 'john' });
cart2.addPromotion();
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });
//# sourceMappingURL=07 class.js.map