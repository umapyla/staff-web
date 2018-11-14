import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateWiseTransectioComponent } from './date-wise-transectio/date-wise-transectio.component';
import { TransectionDetailsModule } from './transection-details.module';


const routes: Routes = [{
    path: '',
    component: DateWiseTransectioComponent
}];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[]
})
export class transectionRouting{

}