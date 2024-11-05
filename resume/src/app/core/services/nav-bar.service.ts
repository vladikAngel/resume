import {Injectable} from "@angular/core";
import {NavigateInterface} from "../interfaces/home/navigate.interface";


@Injectable({
  providedIn: 'root'
})


export class NavBarService{
  getNavigateItems(): Array<NavigateInterface>{
    return [
      {  nameRu: 'Главная', nameEn: 'Home', customUrl: '/', blockId: 'home-block' },
      {  nameRu: 'Обо мне', nameEn: 'About', customUrl: '/', blockId: 'about-block' },
      {  nameRu: 'Проекты',nameEn: 'Project', customUrl: '/', blockId: 'portfolio-block' },
    ];
  }
}
