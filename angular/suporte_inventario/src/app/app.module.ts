import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SiteHeaderComponent } from './components/header/site-header/site-header.component';
import { FooterSiteComponent } from './components/header/footer/footer-site/footer-site.component';
import { LogoAreaComponent } from './components/header/site-header/logo-area/logo-area/logo-area.component';
import { LoginAreaComponent } from './components/header/site-header/login-area/login-area/login-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SiteHeaderComponent,
    FooterSiteComponent,
    LogoAreaComponent,
    LoginAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
