import { Component, Renderer2, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { read: true, static: true }) title: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setProperty(this.title.nativeElement, 'innerHTML', 'Shop');
  }
}
