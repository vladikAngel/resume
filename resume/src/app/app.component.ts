import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./layout/header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resume';


  constructor(private router: Router) {

  }
}


  // ngOnInit(){
  //  this.showSpinner()
  // }
  //
  // showSpinner(){
  //   this.spinner.show();
  //
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 500);
  // }

