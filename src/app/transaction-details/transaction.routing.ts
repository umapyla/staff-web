import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransectionDetailsModule } from './transaction-details.module';
import { DateWiseTransectioComponent } from './date-wise-transaction/date-wise-transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


const routes: Routes = [{
    path: '',
    component: TransactionListComponent
}];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[]
})
export class transectionRouting{

}