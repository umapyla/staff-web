import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionalSearchComponent } from '../app/transactional-search/transactional-search.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransactionSearchService } from './transaction-search.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'transactional' , component: TransactionalSearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionalSearchComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule,
    HttpClientModule
  ],
  providers: [ TransactionSearchService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
