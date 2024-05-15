import {Component, HostListener} from '@angular/core';
import {NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgForOf
  ],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => *', [
        animate('1s ease-in')
      ])
    ])
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  visible = false;
  skills: string[] = [
    'Разработка с использованием HTML, CSS и JavaScript/TypeScript',
    'Создание масштабируемых приложений на Angular',
    'Оптимизация производительности веб-приложений',
    'Дизайн и внедрение UX/UI решений',
    'Работа с системами контроля версий, такими как Git',
    'Взаимодействие с RESTful API и интеграция с backend системами'
  ];



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const aboutBlock = document.getElementById('about-block');
    if (aboutBlock) {
      const rect = aboutBlock.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if (topShown && bottomShown) {
        this.visible = true;
      }
    }
  }
}
