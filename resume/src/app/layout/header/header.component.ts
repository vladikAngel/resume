import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ScrollService} from "../../core/services/scroll.service";
import {NavigateInterface} from "../../core/interfaces/home/navigate.interface";
import {animate, style, transition, trigger} from "@angular/animations";
import {TranslateModule} from "@ngx-translate/core";
import {LoaderComponent} from "../../../assets/shared/components/loader/loader.component";
import {NgxSpinnerService} from "ngx-spinner";
import {ScrollToTopDirective} from "../../core/directive/scroll.directive";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {LanguageService} from "../../core/services/language.service";

@UntilDestroy()
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink,
    NgClass,
    NgIf,
    TranslateModule,
    LoaderComponent,
    ScrollToTopDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInRight', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-100%)'}),
        animate('1s ease', style({opacity: 1, transform: 'translateX(0)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  navigateItems!: Array<NavigateInterface>;
  isDropdownOpen: boolean = false;
  activeBlockId: string = 'home-block';
  currentLanguage: string | undefined;


  constructor(private languageService: LanguageService,
              private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getSwitchLanguage()
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }



  getSwitchLanguage() {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage =>{
      this.currentLanguage = currentLanguage
    })
  }

  switchLanguage(language: string) {
    this.languageService.setSwitchLanguage(language);
    this.languageService.getSwitchLanguage()
    this.showSpinner()
  }
}
