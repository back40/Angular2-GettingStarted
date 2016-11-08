import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowerComponent }   from './borrower.component';
import { CoreLoanMasterService } from '../shared/services/core-loanMaster.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ SharedModule, CommonModule ],
    exports: [ BorrowerComponent ],
    declarations: [ BorrowerComponent ],
    providers: [ CoreLoanMasterService ]
})
export class BorrowerModule { }