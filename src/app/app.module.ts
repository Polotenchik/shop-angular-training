import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
