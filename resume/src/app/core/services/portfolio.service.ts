import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IProject} from "../interfaces/portfolio/projects.interface";

@Injectable({
  providedIn: 'root'
})


export class PortfolioService {
  getProjects(language: string = 'En'): Observable<Array<IProject>> {
    let projects: Array<IProject>;

    if (language === 'En') {
      projects = [
        {
          id: 0,
          title: 'Information Security Management System',
          description: 'SUIB RF (Information Security Management System of the Russian Federation) is a comprehensive framework aimed at safeguarding information and digital resources within Russia. It encompasses regulatory development, technical solutions implementation, and professional training in information security. The project ensures high-level protection against unauthorized access, leaks, and cyber threats. It incorporates standards, audit methods, encryption technologies, authentication, and network monitoring to safeguard classified information, commercial data, and personal information. Crucial for national security and economic development, SUIB RF fosters trust in digital services, prevents cyber attacks, and upholds the interests of the state and its citizens in the online sphere.',
          instruments: ['HTML', 'SCSS', 'Angular 16', 'Material','API', 'RXJS', 'TS', 'Yandex API', 'Bootstrap']
        },
        {
          id: 1,
          title: 'Property and Health Insurance (strahovanie.md)',
          description: '"Insurance House" is a modern project developed using the following technologies: FrontEnd - Angular 16, BackEnd - .Net 5.0, ensuring system reliability and performance. Our project offers a wide range of insurance services, including CASCO, OSAGO, Green Card, medical insurance for travelers abroad, accident insurance, as well as property insurance for legal entities and individuals. We provide a convenient personal account for clients, as well as an administrative panel for data management. Our users can utilize a dynamic calculator to estimate insurance costs, making the process of selecting an insurance plan more transparent and convenient. Additionally, our project provides the ability to track the status of current insurance policies: users can find out if payments are being made, the status of review, and other important information. "Insurance House" aims to provide its clients with reliable protection and convenience in using insurance services.',
          instruments: ['Angular 12-16', 'Angular Universal (SSR)', 'HTML','API', 'SCSS', 'RXJS', 'TS', 'Material', 'Bootstrap']
        },
        {
          id: 2,
          title: 'Automotive Parts Store (tiravto.md)',
          description: '"TirAvto" is a unique online project offering a wide range of auto parts and accessories for automobiles. Our website is designed for those who value convenience and speed when choosing the necessary parts for their vehicle. We provide customers with a user-friendly interface for searching and ordering parts, including engine components, brake systems, electronics, body parts, and much more. Our catalog is constantly updated to provide our customers with access to the most modern and reliable parts. In addition, "TirAvto" offers fast delivery and professional consultation on all matters related to the selection and installation of auto parts. We strive to become a reliable partner for car owners, providing high-quality products and convenience in using our website.',
          instruments: ['Angular 8', 'HTML', 'SCSS', 'RXJS','API', 'TS', 'Bootstrap']
        },
        {
          id: 3,
          title: 'Unified System of Identification and Authentication (ESIA)',
          description: '"ESIA" stands for Unified System of Identification and Authentication. It collects, processes, and stores information about system participants, both individuals and legal entities, who have registered and created an account. A verified account in ESIA serves as an electronic passport, allowing access to various websites, portals, and systems without the need for additional registration and authentication methods such as username and password.\n' +
            '\n' +
            'ESIA is often associated with the Gosuslugi portal, but technically they are not the same. However, registering with ESIA essentially means registering with Gosuslugi, so an account on the portal is identical to an account in ESIA and contains the same personal user data.',

          instruments: ['Angular 16', 'HTML', 'SCSS', 'RXJS','API', 'TS', 'Bootstrap']
        },
        {
          id: 4,
          title: 'Implementing User Authentication via Identity Server',
          description: '"Identity Server" is a framework for implementing authentication, authorization, and account management systems in applications. It provides flexible tools for creating and managing authentication tokens, including OpenID Connect and OAuth 2.0. IdentityServer allows applications to delegate the authentication and authorization process to a specialized server, enhancing security and simplifying the development process. Overall, IdentityServer helps create secure and scalable access management systems for network resources.',
          instruments: ['Angular 17', 'OAuth 2.0', 'API', 'TS']
        }
      ];
    } else if (language === 'Ru') {
      projects = [
        {
          id: 0,
          title: 'Система управления информационной безопасностью',
          description: 'СУИБ РФ (Система управления информационной безопасностью Российской Федерации) — это комплексная структура, направленная на защиту информации и цифровых ресурсов в России. Она охватывает разработку нормативных актов, внедрение технических решений и профессиональное обучение в области информационной безопасности. Проект обеспечивает высокий уровень защиты от несанкционированного доступа, утечек и киберугроз. Он включает стандарты, методы аудита, технологии шифрования, аутентификацию и мониторинг сети для защиты конфиденциальной информации, коммерческих данных и личной информации. Важный для национальной безопасности и экономического развития, СУИБ РФ укрепляет доверие к цифровым услугам, предотвращает кибератаки и защищает интересы государства и его граждан в онлайн-сфере.',
          instruments: ['HTML', 'SCSS', 'Angular 16', 'Material', 'API','RXJS', 'TS', 'Yandex API', 'Bootstrap']
        },
        {
          id: 1,
          title: 'Страхование имущества и здоровья (strahovanie.md)',
          description: '"Страховой Дом" — это современный проект, разработанный с использованием следующих технологий: FrontEnd - Angular 16, BackEnd - .Net 5.0, обеспечивающий надежность и производительность системы. Наш проект предлагает широкий спектр страховых услуг, включая КАСКО, ОСАГО, Зеленую карту, медицинское страхование для выезжающих за рубеж, страхование от несчастных случаев, а также страхование имущества для юридических и физических лиц. Мы предоставляем удобный личный кабинет для клиентов, а также административную панель для управления данными. Наши пользователи могут использовать динамический калькулятор для оценки стоимости страховки, что делает процесс выбора страхового плана более прозрачным и удобным. Кроме того, наш проект предоставляет возможность отслеживать статус текущих страховых полисов: пользователи могут узнать, производятся ли выплаты, статус рассмотрения и другую важную информацию. "Страховой Дом" стремится обеспечить своим клиентам надежную защиту и удобство в использовании страховых услуг.',
          instruments: ['Angular 16', 'Angular Universal (SSR)', 'HTML', 'SCSS','API', 'RXJS', 'TS', 'Material', 'Bootstrap']
        },
        {
          id: 2,
          title: 'Магазин автозапчастей (tiravto.md)',
          description: '"ТирАвто" — это уникальный онлайн-проект, предлагающий широкий ассортимент автозапчастей и аксессуаров для автомобилей. Наш сайт разработан для тех, кто ценит удобство и скорость при выборе необходимых деталей для своего автомобиля. Мы предоставляем клиентам удобный интерфейс для поиска и заказа запчастей, включая компоненты двигателя, тормозные системы, электронику, кузовные детали и многое другое. Наш каталог постоянно обновляется, чтобы предоставить нашим клиентам доступ к самым современным и надежным запчастям. Кроме того, "ТирАвто" предлагает быструю доставку и профессиональную консультацию по всем вопросам, связанным с выбором и установкой автозапчастей. Мы стремимся стать надежным партнером для автовладельцев, предоставляя качественные продукты и удобство в использовании нашего сайта.',
          instruments: ['Angular 16-17', 'HTML','API', 'SCSS', 'RXJS', 'TS', 'Bootstrap']
        },
        {
          id: 3,
          title: 'Единая система идентификации и аутентификации (ЕСИА)',
          description: '"ЕСИА" — это единая система идентификации и аутентификации. В ней формируются, учитываются и хранятся сведения об участниках системы — физических и юридических лицах, которые прошли регистрацию с созданием учётной записи. Подтверждённая учётная запись в ЕСИА — своего рода электронный паспорт, с помощью которого можно получать доступ к разным сайтам, порталам и системам, не используя дополнительные средства регистрации и авторизации, например логин и пароль.\n' +
            '\n' +
            'Система ЕСИА часто ассоциируется с порталом Госуслуги, но технически это не одно и то же. Однако регистрация в ЕСИА — это, по сути, регистрация на Госуслугах, поэтому учётная запись на портале идентична учётной записи в ЕСИА и содержит одинаковые персональные данные пользователя.',
          instruments: ['Angular 16', 'HTML', 'SCSS', 'RXJS', 'TS','API', 'Bootstrap']
        },
        {
          id: 4,
          title: 'Реализация авторизации пользователей через Identity Server',
          description: '"Identity Server" — то фреймворк для реализации систем аутентификации, авторизации и управления учетными записями в приложениях. Он предоставляет гибкие инструменты для создания и управления токенами аутентификации, включая OpenID Connect и OAuth 2.0. IdentityServer позволяет приложениям делегировать процесс аутентификации и авторизации на специализированный сервер, что повышает безопасность и упрощает процесс разработки. В общем, IdentityServer помогает создавать безопасные и расширяемые системы управления доступом к ресурсам в сети.',
          instruments: ['Angular 17', 'OAuth 2.0','API', 'TS',]
        },
      ];
    } else {
      projects = [];
    }

    return of(projects);
  }
}
