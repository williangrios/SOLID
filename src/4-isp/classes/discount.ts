//Strategy pattern
export abstract class Discount{
  abstract calculate(value: number): number
}

//strategy 0
export class NoPercentDiscount extends Discount{
  calculate(price: number): number {
    return price
  }
}

//strategy 1
export class FiftyPercentDiscount extends Discount{
  private readonly discount = 0.5;
  calculate(price: number): number {
    return price - price * this.discount
  }
}

//strategy 2
export class TenPercentDiscount extends Discount{
  private readonly discount = 0.1;
  calculate(price: number): number {
    return price - price * this.discount
  }
}
