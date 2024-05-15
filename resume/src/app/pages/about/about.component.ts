import {Component, HostListener, Input, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IExperience} from "../../core/interfaces/about/experience.interface";
import EventEmitter from "events";
import {forkJoin} from "rxjs";
import {MockDataService} from "../../core/services/mock/mock-data.service";
import {ScrollService} from "../scroll.service";



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
export class AboutComponent implements OnInit{
  visible = false;
  experienceItems: Array<IExperience> = [];
  currentLanguage: string | undefined;


constructor(private dataService: MockDataService,
            private scrollService: ScrollService) {
}


 ngOnInit() {
  this.getData()

 }

  getData(): void {
    this.scrollService.getLanguageUpdate().subscribe(language => {
      this.currentLanguage = language;
      this.dataService.getExperience(this.currentLanguage).subscribe(experience => {
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
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if (topShown && bottomShown) {
        this.visible = true;
      }
    }
  }
}
