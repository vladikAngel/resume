import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {NavigateInterface} from "../core/interfaces/home/navigate.interface";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollBehaviorSubject = new BehaviorSubject<string>('home-block');
  private languageBehaviorSubject = new BehaviorSubject<string>('Ru');

  getNavigateItems(): Array<NavigateInterface>{
    return [
      {  nameRu: 'Главная', nameEn: 'Home', customUrl: '/', blockId: 'home-block' },
      {  nameRu: 'Обо мне', nameEn: 'About', customUrl: '/', blockId: 'about-block' },
      {  nameRu: 'Портфолио',nameEn: 'Portfolio', customUrl: '/', blockId: 'portfolio-block' },
      // Мои проекты переименовать
      {  nameRu: 'Связь со мной',nameEn: 'Contact', customUrl: '/', blockId: 'contact-block' }
    ];
  }

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

  // Метод для получения информации о смене языка
  getLanguageUpdate() {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    this.languageBehaviorSubject = new BehaviorSubject<string>(storedLanguage);
    return this.languageBehaviorSubject.asObservable();
  }
}
