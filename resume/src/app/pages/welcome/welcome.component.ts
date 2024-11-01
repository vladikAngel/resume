import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class WelcomeComponent implements OnInit {
  showAnim: boolean = true;
  mainText: string = 'Angular Developer';
  constructor(private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showAnim = false;
    }, 3000);
    setTimeout(() => {
      this.mainText = 'Korpan Vladislav';
      this.showAnim = true;
    }, 5500)
    setTimeout(() => {
      this.showAnim = false;
    }, 8000)
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 10000)
  }

}
