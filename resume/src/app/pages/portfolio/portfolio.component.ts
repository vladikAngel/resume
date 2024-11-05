import {Component, HostListener, OnInit} from '@angular/core';
import {IProject} from "../../core/interfaces/portfolio/projects.interface";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PortfolioService} from "../../core/services/portfolio.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {LanguageService} from "../../core/services/language.service";


@UntilDestroy()
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
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
  workItems: Array<IProject & { visible: boolean }> = [];
  currentLanguage: string | undefined;
  visible = false;
  activeItem: IProject | null = null;
  constructor(private languageService: LanguageService,
              private projectService: PortfolioService) {
  }

  ngOnInit() {
    this.getProjects()

  }

  getProjects(): void {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage =>{
      this.currentLanguage = currentLanguage
      this.projectService.getProjects(this.currentLanguage).pipe(untilDestroyed(this)).subscribe(experience => {
        this.workItems = experience.map(item => ({ ...item, visible: false }));
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
