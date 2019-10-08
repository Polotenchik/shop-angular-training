import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorize]'
})
export class ColorizeDirective {
  @HostBinding('style.background-color')
  bgColor;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.bgColor = '#1976d2';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.bgColor = '';
  }

}