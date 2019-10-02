import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductListComponent,
  ]
})

export class ProductsModule {
}
