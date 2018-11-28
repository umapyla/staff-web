import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './service/data.service';
import { HttpModule } from '@angular/http';
import { CurrencyPipe } from './currency.pipe';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction', component: TransactiondetailsComponent }

];
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';
@NgModule({
  declarations: [
    AppComponent,
    TransactiondetailsComponent,
    DashboardComponent,
    CurrencyPipe
    OnlinePurchaseComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,
    HttpClient
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
