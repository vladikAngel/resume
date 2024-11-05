import {Component, HostListener, OnInit} from '@angular/core';
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {AboutComponent} from "../about/about.component";
import {HomeComponent} from "../home/home.component";
import {ScrollService} from "../../core/services/scroll.service";
import {NgForOf} from "@angular/common";
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";
import {ScrollToTopDirective} from "../../core/directive/scroll.directive";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {NavBarService} from "../../core/services/nav-bar.service";
import {LanguageService} from "../../core/services/language.service";

@UntilDestroy()
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    PortfolioComponent,
    AboutComponent,
    HomeComponent,
    NgForOf,
    HeaderComponent,
    FooterComponent,
    ScrollToTopDirective
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  activeBlockId: string  | undefined ;
  currentLanguage: string | undefined;
  constructor(private scrollService: ScrollService,
              private languageService: LanguageService,
              public navService: NavBarService) {}

  ngOnInit() {
    this.getHeaderItem()
    this.getSwitchLanguage()
    this.onScroll()
  }

  getHeaderItem(){
    this.navService.getNavigateItems();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.navService.getNavigateItems()) return;

    for (const item of this.navService.getNavigateItems()) {
      if (typeof document !== 'undefined') {
        const element = document.getElementById(item.blockId);
        if (element) {
          const rectTop = element.getBoundingClientRect().top;
          if (rectTop >= 0 && rectTop < window.innerHeight / 2) {
            this.activeBlockId = item.blockId;
            break;
          }
        }
      }
    }
  }
  getSwitchLanguage() {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage =>{
      this.currentLanguage = currentLanguage
    })
  }
  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }
}
