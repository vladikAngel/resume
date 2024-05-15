import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {AboutComponent} from "../about/about.component";
import {HomeComponent} from "../home/home.component";
import {Subscription} from "rxjs";
import {ScrollService} from "../../core/services/scroll.service";
import {NgForOf} from "@angular/common";
import {NavigateInterface} from "../../core/interfaces/home/navigate.interface";
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    PortfolioComponent,
    AboutComponent,
    HomeComponent,
    NgForOf,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit,OnDestroy {
  navigateItems!: Array<NavigateInterface>;
  activeBlockId: string = 'home-block';
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

  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }
}
