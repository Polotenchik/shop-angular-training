import {ICartItemModel} from './icart-item.model';
import {ProductCategories} from '../../products/models/categories.model';

export class CartItemModel implements ICartItemModel {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity?: number
  ) {
    this.quantity = quantity || 1;
  }

  get sum(): number {
    return this.quantity * this.price;
  }
}