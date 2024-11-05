import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {
  AnimationTextComponent
} from "../../../assets/shared/components/animation-text/animation-text/animation-text.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {LanguageService} from "../../core/services/language.service";
import {IProfile} from "../../core/interfaces/profile/profile.interface";
import {ProfileInfoService} from "../../core/services/profile-info.service";

@UntilDestroy()
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    AnimationTextComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInFromSides', [
      transition(':enter', [
        style({opacity: 0}),
        animate('2s ease', style({opacity: 1}))
      ])
    ]),
    trigger('imageAnimation', [
      state('original', style({
        transform: 'scale(1)'
      })),
      state('scaled', style({
        transform: 'scale(0.8)'
      })),
      transition('original <=> scaled', [
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentLanguage: string | undefined;
  AboutMeText: IProfile[] | undefined

  constructor(private languageService: LanguageService,
              private profileService: ProfileInfoService) {
  }

  ngOnInit() {
    this.getSwitchLanguage()
    this.getProfileInfo()
  }
  getSwitchLanguage() {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage =>{
      this.currentLanguage = currentLanguage
    })
  }
  getProfileInfo() {
    this.languageService.language$.pipe(untilDestroyed(this)).subscribe(currentLanguage => {
      this.profileService.getProfileInfo(currentLanguage).pipe(untilDestroyed(this)).subscribe(profileInfo => {
        this.AboutMeText = profileInfo
      })
    })
  }
}
