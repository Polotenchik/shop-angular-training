import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ColorizeDirective} from './directives/colorize.directive';
import {SelectDirective} from './directives/select.directive';

@NgModule({
  declarations: [
    ColorizeDirective,
    SelectDirective,
  ],
  exports: [
    ColorizeDirective,
    SelectDirective,
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule { }