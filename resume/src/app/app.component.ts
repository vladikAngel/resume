import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./layout/header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ScrollToTopDirective} from "./core/directive/scroll.directive";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FontAwesomeModule, ScrollToTopDirective],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume';

}



