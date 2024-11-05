import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {NgxSpinnerModule} from "ngx-spinner";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
    BrowserAnimationsModule,
    importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'square-jelly-box' })),
  ]
};
