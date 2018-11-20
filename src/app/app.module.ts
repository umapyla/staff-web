import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranscationListingComponent } from './transcation-listing/transcation-listing.component';
import { TranscationdetailService } from './transcationdetail.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    TranscationListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TranscationdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
