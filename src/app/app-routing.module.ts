import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentListComponent } from './investments/investment-list.component';


const routes: Routes = [

    {
        path: '', pathMatch: 'full', redirectTo: 'investments'
    },
    {
        path: 'investments', component: InvestmentListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
