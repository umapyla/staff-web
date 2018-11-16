import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgbModule   } from '@ng-bootstrap/ng-bootstrap';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { ToastModule } from 'ng2-toastr';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    // BrowserAnimationsModule,
    NgbModule.forRoot()
    //  ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
