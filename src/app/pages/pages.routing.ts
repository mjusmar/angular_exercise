import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { 
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
            { path: 'progress',  component: ProgressComponent, data: {title: 'ProgressBar'}},
            { path: 'graph1',  component: Graph1Component, data: {title: 'Graph #1'}},            
            { path: 'account-settings',  component: AccountSettingsComponent, data: {title: 'Account settings'}},            
            { path: 'promises',  component: PromisesComponent, data: {title: 'Promises'}},            
            { path: 'rxjs',  component: RxjsComponent, data: {title: 'Rxjs'}},            
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

