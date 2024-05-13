import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ScrollService} from "../scroll.service";
import {animate, AnimationBuilder, state, style, transition, trigger} from "@angular/animations";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInFromSides', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s ease', style({ opacity: 1 }))
      ])
    ]),
    trigger('animationBth', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('0.5s ease', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('imageAnimation', [
      state('original', style({
        transform: 'scale(1)'
      })),
      state('scaled', style({
        transform: 'scale(0.8)'
      })),
      transition('original <=> scaled', [
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
  currentState = 'original'
  currentLanguage: string | undefined;
  AboutMeText = {
    Ru: {
      greeting: "Привет, я Корпан Владислав",
      profession: "Frontend Разработчик",
      description: "Я опытный frontend разработчик, владеющий созданием высококачественных веб-приложений с использованием HTML, CSS и JavaScript/TypeScript. А также знаком с принципами дизайна UX/UI и оптимизацией производительности, с акцентом на",
      more: "Больше информации",
      contact: "Связь со мной",
    },
   En: {
      greeting: "Hi, I'm Korpan Vladislav",
      profession: "Frontend Developer",
      description: "I am an experienced frontend developer proficient in creating high-quality web applications using HTML, CSS, and JavaScript/TypeScript. I am also knowledgeable in UX/UI design principles and performance optimization, with a focus on",
      more: "More details",
      contact: "Contact me",
    }
  };



  constructor(private scrollService: ScrollService,private animationBuilder: AnimationBuilder,) {}

  ngOnInit() {
     this.startAnimation();
     this.getSwitchLanguage()
  }

  getSwitchLanguage() {
    this.scrollService.getLanguageUpdate().subscribe(language => {
      this.currentLanguage = language;
      console.log(language)
    });
  }

  startAnimation() {
    const factory = this.animationBuilder.build([
      style({ transform: 'scale(1)' }),
      animate('2.3s', style({ transform: 'scale(0.85)' })),
      animate('2.3s', style({ transform: 'scale(1)' }))
    ]);
    const player = factory.create(document.querySelector('.home-page-image'));
    player.onDone(() => {
      this.startAnimation();
    });
    player.play();
  }

  scrollToContact() {
    this.scrollService.scroll('contact-block');
  }
}
