import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './login/login-page/login/login.component';
import { TicketsComponent } from './tickets/tickets/tickets.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';

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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
