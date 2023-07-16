
import Messaging from "../services/messaging";
import Persistency from "../services/persistency";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { OrderStatus } from "./interfaces/order-status";
import ShoppingCart from "./shopping-cart";

export default class Order{
  private _orderStatus: OrderStatus = 'open'

  constructor(private readonly cart: ShoppingCart, private readonly messaging: Messaging, private readonly persistency: Persistency, private readonly customer: CustomerOrder){

  }

  get orderStatus(): OrderStatus{
    return this._orderStatus
  }

  checkout(): void{
    if(this.cart.isEmpty()){
      console.log('Your shoppingCart is empty')
    }
    this._orderStatus = 'closed'
    this.messaging.sendMessage( `Your order was received. Total ${this.cart.total()}`)
    this.persistency.saveOrder()
    this.cart.clear()
    console.log(`The client is ${this.customer.getName()} ${this.customer.getIDN()}`);

  }
}
