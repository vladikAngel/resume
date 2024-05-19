import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;
    if (element && element.id === 'home-block') {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
