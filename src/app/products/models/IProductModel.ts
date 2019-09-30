import { ProductCategories } from './categories.model';

export interface IProductModel {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  items: string[];
  category: ProductCategories;
}
// не принято именовать файлы в верхнем и нижнем регистре

