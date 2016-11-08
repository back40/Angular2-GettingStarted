import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent }   from './maintenance.component';
import { CoreLoanMasterService } from '../shared/services/core-loanMaster.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ SharedModule, CommonModule ],
    exports: [ MaintenanceComponent ],
    declarations: [ MaintenanceComponent ],
    providers: [ CoreLoanMasterService ]
})
export class MaintenanceModule { }