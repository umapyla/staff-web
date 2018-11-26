import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgbModule   } from '@ng-bootstrap/ng-bootstrap';
import {OverlayComponent} from './shared/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
