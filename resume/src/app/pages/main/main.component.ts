import {Component, HostListener, OnInit} from '@angular/core';
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {AboutComponent} from "../about/about.component";
import {HomeComponent} from "../home/home.component";
import {ScrollService} from "../../core/services/scroll.service";
import {NgForOf} from "@angular/common";
import {NavigateInterface} from "../../core/interfaces/home/navigate.interface";
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";
import {ScrollToTopDirective} from "../../core/directive/scroll.directive";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

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
  navigateItems: Array<NavigateInterface> | undefined;
  activeBlockId: string  | undefined ;
  currentLanguage: string | undefined;
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.getHeaderItem()
    this.getSwitchLanguage()
    this.scrollToBlock('home-block')
  }


  getHeaderItem(){
    this.navigateItems = this.scrollService.getNavigateItems();
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
     window.innerHeight;
    if (this.navigateItems !== undefined){
      for (const item of this.navigateItems) {
          if (document.getElementById(item.blockId)!.getBoundingClientRect().top < window.innerHeight &&
            document.getElementById(item.blockId)!.getBoundingClientRect().bottom > 0) {
            this.activeBlockId = item.blockId;
            break;
          }
      }
    }

  }

  getSwitchLanguage() {
    this.scrollService.getLanguageUpdate().pipe(untilDestroyed(this)).subscribe(language => {
      this.currentLanguage = language;
    });
  }

  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }
}
