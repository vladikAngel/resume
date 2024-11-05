import {Component, HostListener, OnInit, } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IExperience} from "../../core/interfaces/about/experience.interface";
import {AboutService} from "../../core/services/about.service";
import {ScrollService} from "../../core/services/scroll.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {LanguageService} from "../../core/services/language.service";

@UntilDestroy()
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.7s ease-in')])
    ])
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  experienceItems: Array<IExperience & { visible: boolean }> = [];
  currentLanguage: string | undefined;
  activeItem: IExperience | null = null;

  constructor(
    private aboutService: AboutService,
    private languageService: LanguageService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage =>{
      this.currentLanguage = currentLanguage
     this.aboutService.getExperience(this.currentLanguage).pipe(untilDestroyed(this)).subscribe(experience => {
       this.experienceItems = experience.map(item => ({ ...item, visible: false }));
     });
   })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const aboutBlock = document.getElementById('about-block');
    if (aboutBlock) {
      this.experienceItems.forEach((item, index) => {
        const element = aboutBlock.children[index] as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            item.visible = true;
          }
        }
      });
    }
  }
}
