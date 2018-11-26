import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransectionDetailsModule } from './transaction-details.module';
import { DateWiseTransectioComponent } from './date-wise-transaction/date-wise-transaction.component';


const routes: Routes = [{
    path: '',
    component: DateWiseTransectioComponent
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TransectionRouting {

}
