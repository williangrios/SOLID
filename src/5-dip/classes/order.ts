import { CustomerOrder } from "./interfaces/customer-protocol";
import MessagingProtocol from "./interfaces/messaging-protocol";
import { OrderStatus } from "./interfaces/order-status";
import PersistencyProtocol from "./interfaces/persistency-protocol";
import ShoppingCartProtocol from "./interfaces/shopping-cart-protocol";

export default class Order{
  private _orderStatus: OrderStatus = 'open'

  constructor(private readonly cart: ShoppingCartProtocol, private readonly messaging: MessagingProtocol, private readonly persistency: PersistencyProtocol, private readonly customer: CustomerOrder){

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
