import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranscationListingComponent } from './transcation-listing/transcation-listing.component';
import { TranscationdetailService } from './transcationdetail.service';
import { HttpModule } from '@angular/http';
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';
@NgModule({
  declarations: [
    AppComponent,
    OnlinePurchaseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TranscationdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
