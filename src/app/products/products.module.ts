import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
    FormsModule,
    SharedModule
  ],
  exports: [
    ProductListComponent,
  ]
})

export class ProductsModule {
}
