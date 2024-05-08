import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ScrollService} from "../../pages/scroll.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  navigateItems: Array<any> = [
    { name: 'Home', customUrl: '/'},
    { name: 'About', customUrl: '/', blockId: 'block1'},
    { name: 'Portfolio', customUrl: '/' , blockId: 'block3'},
    { name: 'Contact', customUrl: '/', blockId: 'block2' }
  ]

  constructor(private scrollService: ScrollService) { }

  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
    console.log(blockId)
  }
}
