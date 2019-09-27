import { Component, OnDestroy, OnInit } from '@angular/core';

import {Subscription} from 'rxjs';

import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  private sub: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      product => (this.products.push(product))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
