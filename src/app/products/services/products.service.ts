import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProductModel } from '../models/product.model';
import { ProductCategories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products = [
    new ProductModel(
        43543534543,
        'Product First',
        'Lorem ipsum dolar sit',
        ProductCategories.b2b,
        42,
        true,
        ['item1', 'item4']
    ),
    new ProductModel(
        5435435435,
        'Product Second',
        'Lorem ipsum dolar sit',
        ProductCategories.b2e,
        102,
        true,
        ['item1', 'item3']
    ),
    new ProductModel(
        89797898778,
        'Product Third',
        'Lorem ipsum dolar sit',
        ProductCategories.b2g,
        5,
        true,
        ['item1', 'item4']
    )
  ];

  constructor() {
  }

  getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }
}
