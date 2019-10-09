import {Injectable} from '@angular/core';

import {Observable, of, Subject} from 'rxjs';

import {CartItemModel} from '../models/cart-item.model';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItemsSource = new Subject<CartItemModel[]>();
  private cartItems$ = this.cartItemsSource.asObservable();
  private cartItems: CartItemModel[] = [];

  public getItems(): Observable<CartItemModel[]> {
    return this.cartItems$;
  }

  public getSum(): Observable<number> {
    return this.cartItems$.pipe(
      map((items: CartItemModel[]) => items.reduce((acc, val) => acc + val.sum, 0))
    );
  }

  public getQuantity(): Observable<number> {
    return this.cartItems$.pipe(
      map((items: CartItemModel[]) => items.reduce((acc, val) => acc + val.quantity, 0))
    );
  }

  public addItem(newItem: CartItemModel): Observable<any> {

    const existsItemIdx = this.cartItems.findIndex(item => item.id === newItem.id);

    if (existsItemIdx > -1) {
      newItem.quantity = this.cartItems[existsItemIdx].quantity + 1;
      this.cartItems.splice(existsItemIdx, 1, newItem);
    } else {
      this.cartItems.push(newItem);
    }

    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  removeItem(cartItem: CartItemModel): Observable<any> {
    const idx = this.cartItems.findIndex(item => item.id === cartItem.id);
    this.cartItems.splice(idx, 1);
    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  public clearCart(): Observable<any> {
    this.cartItems = [];
    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  changeQuantity(cartItem: CartItemModel, increase = true): Observable<any> {
    const idx = this.cartItems.findIndex(item => item.id === cartItem.id);

    if (idx > -1) {
      const origQuantity = this.cartItems[idx].quantity;
      if (increase) {
        cartItem.quantity = origQuantity + 1;
      } else {
        if (cartItem.quantity > 1) {
          cartItem.quantity = origQuantity -1;
        }
      }
      this.cartItems.splice(idx, 1, cartItem);
      this.cartItemsSource.next(this.cartItems);
      return of({success: true});
    }
  }

}
