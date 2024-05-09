import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {NavigateInterface} from "../core/interfaces/home/navigate.interface";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<string>('home-block');

  getNavigateItems(): Array<NavigateInterface>{
    return [
      { name: 'Home', customUrl: '/', blockId: 'home-block' },
      { name: 'About', customUrl: '/', blockId: 'about-block' },
      { name: 'Portfolio', customUrl: '/', blockId: 'portfolio-block' },
      { name: 'Contact', customUrl: '/', blockId: 'contact-block' }
    ];
  }

  scroll(blockId: string) {
    this.scrollSubject.next(blockId);
  }

  getScrollSubject() {
    return this.scrollSubject.asObservable();
  }
}
