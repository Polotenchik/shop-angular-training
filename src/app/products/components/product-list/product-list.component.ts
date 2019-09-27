import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService, private cartService: CartService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onBuyProduct(product: ProductModel): void {
    this.cartService.addProduct(product);
  }


}
