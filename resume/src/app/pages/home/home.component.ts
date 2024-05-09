import {Component, ElementRef} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ScrollService} from "../scroll.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToContact() {
    this.scrollService.scroll('contact-block');
  }
}
