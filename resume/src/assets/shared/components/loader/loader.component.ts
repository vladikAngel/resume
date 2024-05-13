import {Component, OnInit} from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {ScrollService} from "../../../../app/pages/scroll.service";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgxSpinnerModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  currentLanguage: string | undefined;
  loadingLoader = {
    Ru: {
      loading: "Загрузка"
    },
    En: {
      loading: "Loading"
    }
  };

  ngOnInit() {
    this.getSwitchLanguage()
  }

  constructor(private spinner: NgxSpinnerService,
  private scrollService: ScrollService,) {
  }

  getSwitchLanguage() {
    this.scrollService.getLanguageUpdate().subscribe(language => {
      // console.log(language)
      this.currentLanguage = language;
    });
  }

}
