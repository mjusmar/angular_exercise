import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
