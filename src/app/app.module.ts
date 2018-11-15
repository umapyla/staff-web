import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './service/data.service';
import { HttpModule } from '@angular/http';

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
      HttpModule,
      RouterModule.forRoot(routes)
   ],
   providers: [DataService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
