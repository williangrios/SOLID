import { FiftyPercentDiscount, NoPercentDiscount, TenPercentDiscount } from "./classes/discount";
import Order from "./classes/order";
import Product from "./classes/product";
import ShoppingCart from "./classes/shopping-cart";
import Messaging from "./services/messaging";
import Persistency from "./services/persistency";

// const fiftyPercentDiscount = new FiftyPercentDiscount()
// const shoppingCart = new ShoppingCart(fiftyPercentDiscount)
const noPercentDiscount = new NoPercentDiscount()
const shoppingCart = new ShoppingCart(noPercentDiscount)
shoppingCart.addItem( new Product( 'T-shirt',  50.34))
shoppingCart.addItem(new Product('Short', 55.22))
shoppingCart.addItem(new Product('Hat', 40))
const persistency = new Persistency()
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging, persistency)
console.log(order.orderStatus);
console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())
order.checkout()
console.log(order.orderStatus)
