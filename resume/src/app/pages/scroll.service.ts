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
      {  nameRu: 'Проекты',nameEn: 'Project', customUrl: '/', blockId: 'portfolio-block' },
      // {  nameRu: 'Связь со мной',nameEn: 'Contact', customUrl: '/', blockId: 'contact-block' }
    ];
  }

  constructor() {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    this.languageBehaviorSubject = new BehaviorSubject<string>(storedLanguage);
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
    console.log(language)
  }

  // Метод для получения информации о смене языка
  // getLanguageUpdate() {
  //   const storedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
  //   console.log(storedLanguage)
  //   this.languageBehaviorSubject = new BehaviorSubject<string>(storedLanguage);
  //   return this.languageBehaviorSubject.asObservable();
  // }

  getLanguageUpdate() {
    return this.languageBehaviorSubject.asObservable();
  }
}
