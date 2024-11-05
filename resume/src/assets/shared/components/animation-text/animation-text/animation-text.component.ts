import {Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import Typed from 'typed.js';

@Component({
  selector: 'app-animation-text',
  standalone: true,
  imports: [],
  templateUrl: './animation-text.component.html',
  styleUrl: './animation-text.component.scss'
})
export class AnimationTextComponent implements OnInit, OnDestroy {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  private typed!: Typed;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Инициализируем только на клиенте
    if (this.isBrowser) {
      const options = {
        strings: ["Web Developer", "UI/UX Developer", "Angular Developer"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      };

      this.typed = new Typed(this.typedElement.nativeElement, options);
    }
  }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
