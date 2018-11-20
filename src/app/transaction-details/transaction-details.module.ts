import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transectionRouting } from './transaction.routing';
import { DateWiseTransectioComponent } from './date-wise-transaction/date-wise-transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionListService } from './transaction-list.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from '../../../node_modules/ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    CommonModule,
    transectionRouting,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
    ],
  declarations: [DateWiseTransectioComponent, TransactionListComponent],
  providers: [TransactionListService],
  bootstrap: [DateWiseTransectioComponent]
})
export class TransectionDetailsModule { }
