import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes:Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'transaction',component:TransactiondetailsComponent}

  ];

@NgModule({
   declarations: [
      AppComponent,
      TransactiondetailsComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
