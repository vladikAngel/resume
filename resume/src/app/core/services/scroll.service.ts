import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject,} from 'rxjs';
import {NavigateInterface} from "../interfaces/home/navigate.interface";

@Injectable({
  providedIn: 'root'
})
export class ScrollService implements OnInit{
   scrollBehaviorSubject = new BehaviorSubject<string>('home-block');
  public languageBehaviorSubject = new BehaviorSubject<string>('Ru');

  getNavigateItems(): Array<NavigateInterface>{
    return [
      {  nameRu: 'главная', nameEn: 'home', customUrl: '/', blockId: 'home-block' },
      {  nameRu: 'обо мне', nameEn: 'about', customUrl: '/', blockId: 'about-block' },
      {  nameRu: 'проекты',nameEn: 'project', customUrl: '/', blockId: 'portfolio-block' },
    ];
  }

  constructor() {
    // const storedLanguage = localStorage.getItem('selectedLanguage') || 'Ru';
    // this.languageBehaviorSubject = new BehaviorSubject<string>(storedLanguage);

    if (typeof localStorage !== 'undefined') {
      localStorage.getItem('selectedLanguage');
    } else if (typeof sessionStorage !== 'undefined') {
      // Fallback to sessionStorage if localStorage is not supported
      sessionStorage.getItem('selectedLanguage');
    } else {
      // If neither localStorage nor sessionStorage is supported
      console.log('Web Storage is not supported in this environment.');
    }
  }

  ngOnInit() {
    this.setupScrollListener();
  }

  scroll(blockId: string) {
    this.scrollToBlock(blockId);
    this.scrollBehaviorSubject.next(blockId);
  }

  getScrollSubject() {
    return this.scrollBehaviorSubject.asObservable();
  }

  // Метод для отправки информации о смене языка
  updateLanguage(language: string) {
    this.languageBehaviorSubject.next(language);
    localStorage.setItem('selectedLanguage', language);

  }

  scrollToBlock(blockId: string) {
    const block = document.getElementById(blockId);
    if (block) {
      console.log(block.id)
      block.scrollIntoView({ behavior: 'smooth' });
    }
  }
  setupScrollListener() {
    window.addEventListener('scroll', () => {
      const scrollableBlocks = ['home-block', 'about-block', 'portfolio-block'];
      const windowHeight = window.innerHeight;

      for (const blockId of scrollableBlocks) {
        const block = document.getElementById(blockId);
        if (block) {
          const blockTop = block.getBoundingClientRect().top;
          const blockBottom = block.getBoundingClientRect().bottom;

          if (blockTop < windowHeight / 2 && blockBottom > windowHeight / 2) {
            this.scroll(blockId);
            break;
          }
        }
      }
    });
  }


  getLanguageUpdate() {
    return this.languageBehaviorSubject.asObservable();
  }
}
