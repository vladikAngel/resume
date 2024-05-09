import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ScrollService} from "../../pages/scroll.service";
import {NavigateInterface} from "../../core/interfaces/home/navigate.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  navigateItems!: Array<NavigateInterface>;
  activeBlockId: string = 'home-block';
  private scrollSubscription!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.navigateItems = this.scrollService.getNavigateItems();
    this.scrollSubscription = this.scrollService.getScrollSubject().subscribe(blockId => {
      this.activeBlockId = blockId;
    });
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }
}
