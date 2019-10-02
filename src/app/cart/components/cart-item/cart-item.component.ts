import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {CartItemModel} from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() product: CartItemModel;
  @Output() private removeProduct = new EventEmitter<CartItemModel>();

  onRemoveProduct(product: CartItemModel): void {
    this.removeProduct.emit(product);
  }
}