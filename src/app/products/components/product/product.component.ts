import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductCategories } from '../../models/categories.model';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductComponent {
  @Input() product: ProductModel;
  @Output() private buyProduct = new EventEmitter<ProductModel>();


  onBuyProduct(product: ProductModel): void {
    this.buyProduct.emit(product);
    console.log('Product added to Cart');
  }

}
