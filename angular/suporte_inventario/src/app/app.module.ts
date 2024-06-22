import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SiteHeaderComponent } from './components/header/site-header/site-header.component';
import { FooterSiteComponent } from './components/header/footer/footer-site/footer-site.component';
import { LogoAreaComponent } from './components/header/site-header/logo-area/logo-area/logo-area.component';
import { LoginAreaComponent } from './components/header/site-header/login-area/login-area/login-area.component';
import { MenuComponent } from './components/header/site-header/menu/menu/menu.component';
import { DropdownComponent } from './components/header/site-header/dropdown-menu/dropdown/dropdown.component';
import { BigCardComponent } from './home/big-card/big-card/big-card.component';
import { LoginComponent } from './login/login-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SiteHeaderComponent,
    FooterSiteComponent,
    LogoAreaComponent,
    LoginAreaComponent,
    MenuComponent,
    DropdownComponent,
    BigCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
