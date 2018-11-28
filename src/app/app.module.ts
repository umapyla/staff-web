import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransactionalSearchComponent } from '../app/transactional-search/transactional-search.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransactionSearchService } from './transaction-search.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'transactional', component: TransactionalSearchComponent }
];
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';
@NgModule({
  declarations: [
    AppComponent,
    TransactionalSearchComponent,
    SearchComponent
    OnlinePurchaseComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ],
  providers: [TransactionSearchService],

  bootstrap: [AppComponent]
})
export class AppModule { }
