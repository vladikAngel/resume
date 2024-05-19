import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject,} from 'rxjs';
import {NavigateInterface} from "../interfaces/home/navigate.interface";

@Injectable({
  providedIn: 'root'
})
export class ScrollService implements OnInit{
  private scrollBehaviorSubject = new BehaviorSubject<string>('home-block');
  public languageBehaviorSubject = new BehaviorSubject<string>('Ru');

  getNavigateItems(): Array<NavigateInterface>{
    return [
      {  nameRu: 'Главная', nameEn: 'Home', customUrl: '/', blockId: 'home-block' },
      {  nameRu: 'Обо мне', nameEn: 'About', customUrl: '/', blockId: 'about-block' },
      {  nameRu: 'Проекты',nameEn: 'Project', customUrl: '/', blockId: 'portfolio-block' },
    ];
  }

  constructor() {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'Ru';
    this.languageBehaviorSubject = new BehaviorSubject<string>(storedLanguage);
  }

  ngOnInit() {}

  scroll(blockId: string) {
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



  getLanguageUpdate() {
    return this.languageBehaviorSubject.asObservable();
  }
}
