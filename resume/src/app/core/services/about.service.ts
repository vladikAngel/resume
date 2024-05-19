import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IExperience} from "../interfaces/about/experience.interface";


@Injectable({
  providedIn: 'root'
})

export class AboutService {

  getExperience(language: string = 'En'): Observable<Array<IExperience>> {
    let experience: Array<IExperience>;

    if (language === 'En') {
      experience = [
        {
          id: 0,
          role: 'Angular Developer',
          grade: 'Intern',
          period: 'Sept 2023 - Oct 2023',
          description: 'As a frontend developer intern specializing in Angular, I actively contribute to web application development.\n ' +
            'My responsibilities involve crafting user interfaces using Angular and TypeScript, interfacing with APIs, debugging code, and optimizing performance.\n ' +
            'Additionally, I am committed to learning and exploring new opportunities to enhance projects.\n',

        },
        {
          id: 1,
          role: 'Angular Developer',
          grade: 'Junior',
          period: 'Oct 2023 - May 2024',
          description: 'Creating and maintaining user interfaces using Angular. Developing modular and reusable components.\n ' +
            'Implementing practices for performance optimization and security.\n ' +
            'Working with REST APIs for backend integration. Writing tests to ensure code quality.\n ' +
            'Participating in team discussions.',
        },
        {
          id: 1,
          role: 'Ангуляр Разработчик',
          grade: 'Junior +',
          period: 'May 2024 - PRESENT',
          description: 'Developing and maintaining user interfaces using Angular. Creating modular and reusable components.\n ' +
            'Applying best practices for performance optimization and security. Integrating with the backend through REST API.\n' +
            'Writing tests to ensure code quality. Participating in team discussions and improving development processes. \n' +
            'Assisting in mentoring junior developers and facilitating knowledge sharing within the team.',
        },
      ];
    } else if (language === 'Ru') {
      experience = [
        {
          id: 0,
          role: 'Ангуляр Разработчик',
          grade: 'Стажер',
          period: 'Сент 2023 - Окт 2023',
          description: 'В роли стажера frontend-разработчика на Angular я активно участвую в процессе создания веб-приложений.\n ' +
            'Мои обязанности включают разработку пользовательского интерфейса с использованием Angular и TypeScript, взаимодействие с API, отладку кода и оптимизацию производительности. \n' +
            'Я также стремлюсь к обучению и поиску новых возможностей для улучшения проектов.',

        },
        {
          id: 1,
          role: 'Ангуляр Разработчик',
          grade: 'Джуниор',
          period: 'Окт 2023 - Май 2024',
          description: 'Создание и поддержка пользовательских интерфейсов с использованием Angular.\n' +
            'Разработка модульных и повторно используемых компонентов. Внедрение  практик по оптимизации производительности и безопасности.\n ' +
            'Работа с REST API для интеграции с backend. Написание тестов для обеспечения качества кода.\n ' +
            'Участие в командных обсуждениях.',
        },
        {
          id: 2,
          role: 'Ангуляр Разработчик',
          grade: 'Джуниор +',
          period: 'Май 2024 - Сегодня',
          description: 'Разработка и поддержка пользовательских интерфейсов с использованием Angular. ' +
            'Создание модульных и повторно используемых компонентов. Применение лучших практик для оптимизации производительности и обеспечения безопасности. ' +
            'Интеграция с backend через REST API. Написание тестов для проверки качества кода. Участие в командных обсуждениях и улучшении процессов разработки. ' +
            'Помощь в обучении младших разработчиков и содействие обмену знаниями в команде.',
        },
      ];
    } else {
      experience = [];
    }

    return of(experience);
  }
}


