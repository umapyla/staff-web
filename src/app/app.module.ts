import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionalSearchComponent } from '../app/transactional-search/transactional-search.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path:'transactional' ,component: TransactionalSearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionalSearchComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [ ],

  bootstrap: [AppComponent]
})
export class AppModule { }
