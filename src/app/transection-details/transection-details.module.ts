import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateWiseTransectioComponent } from './date-wise-transectio/date-wise-transectio.component';
import { transectionRouting } from './transection.routing';


@NgModule({
  imports: [
    CommonModule,
    transectionRouting
    ],
  declarations: [DateWiseTransectioComponent],
  bootstrap: [DateWiseTransectioComponent]
})
export class TransectionDetailsModule { }
