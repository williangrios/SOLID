import { Discount } from "./discount";
import CartItem from "./interfaces/cart-item";
import ShoppingCartProtocol from "./interfaces/shopping-cart-protocol";


export default class ShoppingCart implements ShoppingCartProtocol{
  private readonly _items: CartItem[]=[]

  //open close principle here
  constructor(private readonly discount: Discount){

  }
  items(): readonly CartItem[] {
    throw new Error("Method not implemented.");
  }

  addItem(item: CartItem): void{
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  total(): number{
    return Number(this._items.reduce((total, item ) => total + item.price, 0).toFixed(2));
  }

  //open close principle here
  totalWithDiscount(): number{
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean{
    return this._items.length === 0
  }

  clear(): void{
    this._items.length = 0;
  }
}
