import Order from "./entities/order";
import Product from "./entities/product";
import ShoppingCart from "./entities/shopping-cart";
import Messaging from "./services/messaging";
import Persistency from "./services/persistency";


const shoppingCart = new ShoppingCart();
shoppingCart.addItem( new Product( 'T-shirt',  50.34))
shoppingCart.addItem(new Product('Short', 55.22))
shoppingCart.addItem(new Product('Hat', 40))
const persistency = new Persistency()
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging, persistency)
console.log(order.orderStatus);
console.log(shoppingCart.items)
console.log(shoppingCart.total())
order.checkout()
console.log(order.orderStatus)
