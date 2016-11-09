import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { routes } from './app.routes';

import { HomeModule } from './home/home.module'; 
import { MaintenanceModule } from './maintenance/maintenance.module';
import { BorrowerModule } from './borrower/borrower.module';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(routes), 
    HomeModule, 
    MaintenanceModule,
    BorrowerModule, 
    SharedModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
