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
  items: CartItemModel[] = [];
  sum = 0;
  quantity = 0;

  private subscriptions = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit() {
  this.subscriptions.add(this.cartService.getItems().subscribe(items => this.items = items));
  this.subscriptions.add(this.cartService.getSum().subscribe(sum => this.sum = sum));
  this.subscriptions.add(this.cartService.getQuantity().subscribe(quantity => this.quantity = quantity));
}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onRemoveCartItem(cartItem: CartItemModel) {
    this.cartService.removeItem(cartItem);
  }

  onIncreaseQuantity(cartItem: CartItemModel): void {
    this.cartService.changeQuantity(cartItem);
  }

  onDecreaseQuantity(cartItem: CartItemModel): void {
    this.cartService.changeQuantity(cartItem, false);
  }

}
