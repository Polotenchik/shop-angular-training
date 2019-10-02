import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import {CartItemModel} from '../../models/cart-item.model';
import {CartService} from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  products: CartItemModel[] = [];
  private sub: Subscription;
  sum = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(product => {
      this.products.push(product);
      this.sum = this.products.reduce((acc, item) => acc + item.price, 0); 
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
