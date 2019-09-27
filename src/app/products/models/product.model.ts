import { IProductModel } from './IProductModel';
import { ProductCategories } from './categories.model';

export class ProductModel implements IProductModel {
    constructor(
      public name: string,
      public description: string,
      public category: ProductCategories,
      public price: number,
      public isAvailable: boolean,
      public items: string[]
    ) { }
}
