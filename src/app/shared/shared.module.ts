import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorizeDirective } from './directives/colorize.directive';
import { SelectDirective } from './directives/select.directive';

// Так обычно пишут
const directives = [ColorizeDirective, SelectDirective];
@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule]
})
export class SharedModule {}
