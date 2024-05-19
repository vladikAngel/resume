import {Component, HostListener, OnInit, } from '@angular/core';
import {NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IExperience} from "../../core/interfaces/about/experience.interface";
import {AboutService} from "../../core/services/about.service";
import {ScrollService} from "../../core/services/scroll.service";



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
        animate('0.7s ease-in')
      ])
    ])
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  visible = false;
  experienceItems: Array<IExperience> = [];
  currentLanguage: string | undefined;


constructor(private aboutService: AboutService,
            private scrollService: ScrollService) {
}


 ngOnInit() {
  this.getData()

 }

  getData(): void {
    this.scrollService.getLanguageUpdate().subscribe(language => {
      this.currentLanguage = language;
      this.aboutService.getExperience(this.currentLanguage).subscribe(experience => {
        this.experienceItems = experience;
      });
    });
  }

  // getData(): void {
  //   forkJoin([this.dataService.getExperience()
  //   ]).subscribe(x => {
  //     this.experienceItems = x[0];
  //     console.log(this.experienceItems)
  //   })
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const aboutBlock = document.getElementById('about-block');
    if (aboutBlock) {
      const rect = aboutBlock.getBoundingClientRect();
      const bottomShown = rect.bottom >= 0; // Проверяем, что хотя бы часть блока видна
      if (bottomShown) {
        this.visible = true;
      }
    }
  }
}
