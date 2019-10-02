import { IProductModel } from './iproduct.model';
import { ProductCategories } from './categories.model';

export class ProductModel implements IProductModel {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public category: ProductCategories,
      public price: number,
      public isAvailable: boolean,
      public items: string[]
    ) { }
}
