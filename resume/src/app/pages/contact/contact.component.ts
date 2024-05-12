import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {LoaderComponent} from "../../../assets/shared/components/loader/loader.component";




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FaIconComponent,
    NgxSpinnerModule,
    LoaderComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent   {


  constructor(private spinner: NgxSpinnerService) {
  }

  showSpinner(){
    this.spinner.show();
  }
}
