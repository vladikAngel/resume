import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {AboutComponent} from "../about/about.component";
import {HomeComponent} from "../home/home.component";
import {Subscription} from "rxjs";
import {ScrollService} from "../../core/services/scroll.service";
import {NgForOf} from "@angular/common";
import {NavigateInterface} from "../../core/interfaces/home/navigate.interface";
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";
import {ScrollToTopDirective} from "../../core/directive/scroll.directive";

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
export class MainComponent implements OnInit,OnDestroy {
  navigateItems!: Array<NavigateInterface>;
  activeBlockId: string | null = 'home-block' ;
  private scrollSubscription!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.getHeaderItem()
    this.getScrollSubscription()
  }
  ngOnDestroy() {
    if (this.scrollSubscription){
      this.scrollSubscription.unsubscribe();
    }
  }

  getHeaderItem(){
    this.navigateItems = this.scrollService.getNavigateItems();
  }

  getScrollSubscription(){
    this.scrollSubscription = this.scrollService.getScrollSubject().subscribe(blockId => {
      if (this.scrollSubscription){
        const block = document.getElementById(blockId);
        if (block) {
          block.scrollIntoView({ behavior: 'smooth' });
        }
        this.activeBlockId = blockId;
      }
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Определение текущего блока, который виден в области просмотра
    const windowHeight = window.innerHeight;
    let currentBlockId = null;
    for (const item of this.navigateItems) {
      const block = document.getElementById(item.blockId);
      if (block) {
        const blockTop = block.getBoundingClientRect().top;
        const blockBottom = block.getBoundingClientRect().bottom;

        if (blockTop < windowHeight && blockBottom > 0) {
          currentBlockId = item.blockId;
          break;
        }
      }
    }
    // Обновление активной точки на основе текущего блока
    this.activeBlockId = currentBlockId;
  }
  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }
}
