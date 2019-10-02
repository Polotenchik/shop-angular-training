import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';

import {CartItemModel} from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private channel = new Subject<CartItemModel>();
  public channel$ = this.channel.asObservable();

  addProduct(product: CartItemModel) {
    this.channel.next(product);
  }
}
