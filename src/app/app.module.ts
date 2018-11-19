import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewBankerComponent } from './view-banker/view-banker.component';
import { ViewBankerService } from './view-banker.service';
import { HttpModule } from '@angular/http';
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBankerComponent,
    OnlinePurchaseComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ViewBankerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
