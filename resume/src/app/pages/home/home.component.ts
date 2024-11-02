import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ScrollService} from "../../core/services/scroll.service";
import {animate, AnimationBuilder, state, style, transition, trigger} from "@angular/animations";
import {NgOptimizedImage} from "@angular/common";
import {
  AnimationTextComponent
} from "../../../assets/shared/components/animation-text/animation-text/animation-text.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    AnimationTextComponent
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
export class HomeComponent implements OnInit , AfterViewInit{
  currentState = 'original'
  currentLanguage: string | undefined;
  AboutMeText = {
    Ru: {
      greeting: "Привет,я Корпан Владислав",
      profession: "И я являюсь ",
      description: "Я опытный frontend разработчик, владеющий созданием высококачественных веб-приложений с использованием HTML, CSS и JavaScript/TypeScript. В своей работе я использую современные технологии и инструменты для создания динамичных и отзывчивых пользовательских интерфейсов на",
      more: "Больше информации",
      contact: "Связь со мной",
    },
   En: {
      greeting: "Hi, It's Korpan Vladislav",
      profession: "I a'm a ",
      description: "I am an experienced frontend developer skilled in creating high-quality web applications using HTML, CSS, and JavaScript/TypeScript. In my work, I utilize modern technologies and tools to build dynamic and responsive user interfaces with",
      more: "More details",
      contact: "Contact me",
    }
  };



  constructor(private scrollService: ScrollService,private animationBuilder: AnimationBuilder,private renderer: Renderer2) {}

  ngOnInit() {
     this.getSwitchLanguage()
  }
  ngAfterViewInit() {
    this.startAnimation();
  }
  getSwitchLanguage() {
    this.scrollService.getLanguageUpdate().pipe(untilDestroyed(this)).subscribe(language => {
      this.currentLanguage = language;
    });
  }

  startAnimation() {
    if (typeof document !== 'undefined') {
      const factory = this.animationBuilder.build([
        style({ transform: 'scale(1)' }),
        animate('2.3s', style({ transform: 'scale(0.85)' })),
        animate('2.3s', style({ transform: 'scale(1)' }))
      ]);

      const element = this.renderer.selectRootElement('.home-page-image', true);

      if (element) {
        const player = factory.create(element);
        player.onDone(() => {
          this.startAnimation();
        });
        player.play();
      }
    }
  }
}
