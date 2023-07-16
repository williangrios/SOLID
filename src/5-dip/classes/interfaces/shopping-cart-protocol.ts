import CartItem from "./cart-item"

export default interface ShoppingCartProtocol{
  items(): Readonly<CartItem[]>
  addItem(item: CartItem): void
  removeItem(index: number): void
  total(): number
  totalWithDiscount(): number
  isEmpty(): boolean
  clear(): void
}


