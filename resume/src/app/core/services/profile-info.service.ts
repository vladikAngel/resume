import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IProfile} from "../interfaces/profile/profile.interface";

@Injectable({
  providedIn: 'root'
})


export class ProfileInfoService {
  getProfileInfo(language: string = 'En'): Observable<Array<IProfile>> {
    let profile: Array<IProfile>;

    if (language === 'En') {
      profile = [
        {
          greeting: "Hi, It's Korpan Vladislav",
          profession: "I a'm a ",
          description: "I am an experienced frontend developer skilled in creating high-quality web applications using HTML, CSS, and JavaScript/TypeScript. In my work, I utilize modern technologies and tools to build dynamic and responsive user interfaces with",
          more: "More details",
          contact: "Contact me",
        },
      ];
    } else if (language === 'Ru') {
      profile = [
        {
          greeting: "Привет,я Корпан Владислав",
          profession: "И я являюсь ",
          description: "Я опытный frontend разработчик, владеющий созданием высококачественных веб-приложений с использованием HTML, CSS и JavaScript/TypeScript. В своей работе я использую современные технологии и инструменты для создания динамичных и отзывчивых пользовательских интерфейсов на",
          more: "Больше информации",
          contact: "Связь со мной",
        },
      ];
    } else {
      profile = [];
    }
    return of(profile);
  }
}
