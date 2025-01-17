import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PopupComponent } from './Components/popup/popup.component';

import { AuthInterceptor } from './auth.interceptor';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './Components/loader/loader.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PasswordResetComponent } from './Components/password-reset/password-reset.component';
import { LoaderInterceptor } from './loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    PopupComponent,
    SignupComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
