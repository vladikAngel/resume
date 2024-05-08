import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ScrollService} from "../scroll.service";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit,OnDestroy{

  private scrollSubscription: Subscription ;

  constructor(private scrollService: ScrollService) {
    this.scrollSubscription = new Subscription();
    console.log(scrollService)
  }

  ngOnInit() {
    console.log('Component initialized');

    this.scrollSubscription = this.scrollService.getScrollSubject().subscribe(blockId => {
      const block = document.getElementById(blockId);
      if (block) {
        block.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolled to block:', blockId);
      }
    });
  }

  ngOnDestroy() {
    console.log('Component destroyed');

    this.scrollSubscription.unsubscribe();
  }

}
