import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ScrollService} from "../../core/services/scroll.service";
import {NavigateInterface} from "../../core/interfaces/home/navigate.interface";
import {Subscription} from "rxjs";
import {animate, style, transition, trigger} from "@angular/animations";
import {TranslateModule} from "@ngx-translate/core";
import {LoaderComponent} from "../../../assets/shared/components/loader/loader.component";
import {NgxSpinnerService} from "ngx-spinner";
import {ScrollToTopDirective} from "../../core/directive/scroll.directive";


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
export class HeaderComponent implements OnInit, OnDestroy {
  navigateItems!: Array<NavigateInterface>;
  isDropdownOpen: boolean = false;
  activeBlockId: string = 'home-block';
  private scrollSubscription!: Subscription;
  currentLanguage: string | undefined;


  constructor(private scrollService: ScrollService,
              private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getHeaderItem()
    this.getScrollSubscription()
    this.getswitchLanguage()
  }

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  getswitchLanguage() {
    this.scrollService.getLanguageUpdate().subscribe(language => {
      this.currentLanguage = language;
    });
  }

  getHeaderItem() {
    this.navigateItems = this.scrollService.getNavigateItems();
  }

  getScrollSubscription() {
    this.scrollSubscription = this.scrollService.getScrollSubject().subscribe(blockId => {
      this.activeBlockId = blockId;
    });
  }

  scrollToBlock(blockId: string) {
    this.scrollService.scroll(blockId);
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.scrollService.updateLanguage(language);
    this.showSpinner()
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;

  }

}
