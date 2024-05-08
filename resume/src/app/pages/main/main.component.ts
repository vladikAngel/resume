import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import {PortfolioComponent} from "../portfolio/portfolio.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  {

}
