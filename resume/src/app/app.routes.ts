import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";



export const routes: Routes = [
  { path: 'home', component: MainComponent },
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];
