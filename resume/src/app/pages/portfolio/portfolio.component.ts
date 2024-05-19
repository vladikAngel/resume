import {Component, HostListener, OnInit} from '@angular/core';
import {AboutService} from "../../core/services/about.service";
import {ScrollService} from "../../core/services/scroll.service";

import {IProject} from "../../core/interfaces/portfolio/projects.interface";
import {NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PortfolioService} from "../../core/services/portfolio.service";


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgForOf
  ],
  animations: [
    trigger('checkBlock', [
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
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  workItems: Array<IProject> = [];
  currentLanguage: string | undefined;
  visible = false;

  constructor(private dataService: AboutService,
              private projectService: PortfolioService,
              private scrollService: ScrollService) {
  }

  ngOnInit() {
    this.getProjects()

  }

  getProjects(): void {
    this.scrollService.getLanguageUpdate().subscribe(language => {
      this.currentLanguage = language;
      this.projectService.getProjects(this.currentLanguage).subscribe(experience => {
        this.workItems = experience;
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const aboutBlocks = document.querySelectorAll('.project-item');
    if (aboutBlocks) {
      aboutBlocks.forEach((block) => {
        const rect = block.getBoundingClientRect();
        const bottomShown = rect.bottom >= 0 && rect.top <= window.innerHeight;
        if (bottomShown) {
          this.visible = true;
        }
      });
    }
  }
}
