import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './login/login-page/login/login.component';
import { TicketsComponent } from './tickets/tickets/tickets.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { OpenTicketComponent } from './open-ticket/open-ticket/open-ticket.component';
import { SupportComponent } from './support/support/support.component';
import { AboutUsComponent } from './home/about/about-us/about-us.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'tickets',
    component: TicketsComponent
  },
  {
    path:'inventory',
    component: InventoryComponent
  },
  {
    path:'openticket',
    component: OpenTicketComponent
  },
  {
    path:'support',
    component: SupportComponent
  },
  {
    path:'about-us',
    component: AboutUsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
