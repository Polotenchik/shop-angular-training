import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective implements AfterViewInit {
  @Input('appSelect') color: string;

  private el: HTMLElement;
  private origBorderColor: string;
  private isSelected =  false;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngAfterViewInit() {
    this.origBorderColor = getComputedStyle(this.el).borderColor;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    const tag = event.target.tagName;

    if (tag !== 'BUTTON' && tag !== 'INPUT') {
      this.isSelected = !this.isSelected;
      this.select(this.color || 'orange');
    }
  }

  private select(color: string) {
    this.el.style.borderColor = this.isSelected ? color : this.origBorderColor;
  }
}