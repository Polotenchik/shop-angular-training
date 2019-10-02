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

  private cartItemSub: Subscription;
  private sumSub: Subscription;
  private quantitySub: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItemSub = this.cartService.getItems().subscribe(items => this.items = items);
    this.sumSub = this.cartService.getSum().subscribe(sum => this.sum = sum);
    this.quantitySub = this.cartService.getQuantity().subscribe(quantity => this.quantity = quantity);
  }

  ngOnDestroy() {
    this.cartItemSub.unsubscribe();
    this.sumSub.unsubscribe();
    this.quantitySub.unsubscribe();
  }

  onRemoveCartItem(idx: number) {
    this.cartService.removeItem(idx);
  }

}
