import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'transactions',
        loadChildren: './transaction-details/transaction-details.module#TransectionDetailsModule'
      },
];
@NgModule(
    {
        imports: [RouterModule.forRoot(routes, {useHash: true})],
        exports: [RouterModule],
    }
)
export class AppRouting {
}
