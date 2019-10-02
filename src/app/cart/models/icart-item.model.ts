import {IProductModel} from '../../products/models/iproduct.model';

export interface ICartItemModel {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  sum: number;
}
