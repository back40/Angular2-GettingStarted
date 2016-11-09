import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BorrowerComponent }   from './borrower.component';
import { BorrowerDetailComponent } from './borrower-detail.component'
import { CoreCustomersService } from '../shared/services/core-customers.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ SharedModule, CommonModule, 
        RouterModule.forChild([
      { path: 'borrower/:id', 
        component: BorrowerDetailComponent }
    ])],
    exports: [ BorrowerComponent, BorrowerDetailComponent ],
    declarations: [ BorrowerComponent, BorrowerDetailComponent ],
    providers: [ CoreCustomersService ]
})
export class BorrowerModule { }