import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ScrollService} from "../scroll.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit,OnDestroy {

  private scrollSubscription: Subscription ;

  constructor(private scrollService: ScrollService) {
    this.scrollSubscription = new Subscription();
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
