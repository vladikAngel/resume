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
      // {  nameRu: 'Связь со мной',nameEn: 'Contact', customUrl: '/', blockId: 'contact-block' }
    ];
  }

  constructor() {

  }

  ngOnInit() {
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
