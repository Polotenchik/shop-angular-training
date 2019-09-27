import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';

import {ProductModel} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private channel = new Subject<ProductModel>();
  public channel$ = this.channel.asObservable();

  addProduct(product: ProductModel) {
    this.channel.next(product);
  }
}
