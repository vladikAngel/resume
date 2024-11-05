import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class LanguageService{


  private languageSubject = new BehaviorSubject<string>(
    typeof window !== 'undefined' && localStorage.getItem('selectedLanguage') || '');
  language$ = this.languageSubject.asObservable();


  setSwitchLanguage(language: string) {
    localStorage.setItem('selectedLanguage', language);
    this.languageSubject.next(language);

  }

}
