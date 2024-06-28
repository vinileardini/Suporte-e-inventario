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
import { TicketsComponent } from './tickets/tickets/tickets.component';
import { CardTicketComponent } from './tickets/tickets/ticket/card-ticket/card-ticket.component';
import { SidebarMenuComponent } from './tickets/tickets/sidebar/sidebar-menu/sidebar-menu.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { BigCardInventoryComponent } from './inventory/inventory/big-card/big-card-inventory/big-card-inventory.component';
import { CardInventoryComponent } from './inventory/inventory/cards-inventory/card-inventory/card-inventory.component';
import { SerialNumComponent } from './inventory/inventory/cards-inventory/serial-num/serial-num/serial-num.component';
import { UserInventoryComponent } from './inventory/inventory/cards-inventory/user-inventory/user-inventory/user-inventory.component';
import { ModelInventoryComponent } from './inventory/inventory/cards-inventory/model-inventory/model-inventory/model-inventory.component';
import { SupportComponent } from './support/support/support.component';
import { OpenTicketComponent } from './open-ticket/open-ticket/open-ticket.component';

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
    LoginComponent,
    TicketsComponent,
    CardTicketComponent,
    SidebarMenuComponent,
    InventoryComponent,
    BigCardInventoryComponent,
    CardInventoryComponent,
    SerialNumComponent,
    UserInventoryComponent,
    ModelInventoryComponent,
    SupportComponent,
    OpenTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
