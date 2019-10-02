import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {CartItemModel} from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() cartItem: CartItemModel;
  @Output() private removeCartItem = new EventEmitter<CartItemModel>();

  onRemoveCartItem(cartItem: CartItemModel): void {
    this.removeCartItem.emit(cartItem);
  }
}
