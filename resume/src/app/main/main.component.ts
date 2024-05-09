import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioComponent} from "../pages/portfolio/portfolio.component";
import {ContactComponent} from "../pages/contact/contact.component";
import {AboutComponent} from "../pages/about/about.component";
import {HomeComponent} from "../pages/home/home.component";
import {Subscription} from "rxjs";
import {ScrollService} from "../pages/scroll.service";
import {NgForOf} from "@angular/common";
import {NavigateInterface} from "../core/interfaces/home/navigate.interface";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NgForOf
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
    this.navigateItems = this.scrollService.getNavigateItems();
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

  ngOnDestroy() {
    if (this.scrollSubscription){
      this.scrollSubscription.unsubscribe();
    }
  }

  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }
}
