import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './login/login.component';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,

   ],
   imports: [
      BrowserModule,
      AppRouting,
      BsDatepickerModule.forRoot()
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
