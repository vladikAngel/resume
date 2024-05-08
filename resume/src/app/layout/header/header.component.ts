import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

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
    { name: 'About', customUrl: '/'},
    { name: 'Portfolio', customUrl: '/'},
    { name: 'Contact', customUrl: '/'}
  ]
}
