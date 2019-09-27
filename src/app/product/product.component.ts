import { Component, OnInit } from '@angular/core';

import { ProductCategories } from '../models/categories.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string = 'Product';
  description: string = 'This product is ...';
  price: number = 42;
  isAvailable: boolean = false;
  items: string[] = ['item1', 'item2', 'item3', 'item4'];
  category: ProductCategories = ProductCategories.b2b;

  constructor() { }

  ngOnInit() {}

  onBuy() {
    console.log('Product added to Cart');
  }

}
