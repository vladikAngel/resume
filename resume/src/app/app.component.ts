import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./layout/header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'resume';


  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(){
   this.showSpinner()
  }

  showSpinner(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
}
