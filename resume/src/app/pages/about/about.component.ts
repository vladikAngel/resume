import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ScrollService} from "../scroll.service";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit,OnDestroy{
  private scrollSubscription: Subscription;

  constructor(private scrollService: ScrollService) {
    this.scrollSubscription = new Subscription();
    console.log(this.scrollSubscription)
  }

  ngOnInit() {
    console.log('AboutComponent initialized');

    this.scrollSubscription = this.scrollService.getScrollSubject().subscribe(blockId => {
      console.log('Received blockId:', blockId);
      const block = document.getElementById(blockId);
      console.log('Block:', block);
      if (block) {
        block.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolled to block:', blockId);
      }
    });
  }

  ngOnDestroy() {
    console.log('AboutComponent destroyed');

    this.scrollSubscription.unsubscribe();
  }
}
