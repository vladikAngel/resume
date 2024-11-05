import {Component, OnInit} from '@angular/core';
import {NgxSpinnerModule} from "ngx-spinner";
import {NgIf} from "@angular/common";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {LanguageService} from "../../../../app/core/services/language.service";

@UntilDestroy()
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    NgxSpinnerModule,
    NgIf
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

  constructor(private languageService: LanguageService) {}

  getSwitchLanguage() {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage =>{
      this.currentLanguage = currentLanguage
    })
  }

}
