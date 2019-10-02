import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorizeDirective } from './directives/colorize.directive';

@NgModule({
  declarations: [ColorizeDirective],
  exports: [
    ColorizeDirective
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule { }