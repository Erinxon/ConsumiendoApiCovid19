import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidComponent } from './components/covid/covid.component';
import { ApicovidInterceptor } from './interceptors/apicovid.interceptor';
import { SpinnerComponent } from './shared/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApicovidInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
