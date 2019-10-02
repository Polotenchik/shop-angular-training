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

  public addItem(item: CartItemModel): Observable<any> {
    this.cartItems.push(item);
    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }

  removeItem(idx: number): Observable<any> {
    this.cartItems.splice(idx, 1);
    this.cartItemsSource.next(this.cartItems);
    return of({success: true});
  }


}
