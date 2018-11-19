import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlinePurchaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
