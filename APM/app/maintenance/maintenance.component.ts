import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ILoan } from '../shared/interfaces'
import { CoreLoanMasterService } from '../shared/services/core-loanmaster.service'

@Component({
    moduleId: module.id,
    selector: 'maint-main',
    templateUrl: 'maintenance.component.html'
})
export class MaintenanceComponent implements OnInit {

    loans: ILoan[];
    errorMessage: string;
    accountNumber: string; 
    customerName: string; 


    constructor(public _coreLoanMasterService: CoreLoanMasterService) { }

    ngOnInit() {

      
     }
  
    findLoans(): void {

        this._coreLoanMasterService.getLoans(this.accountNumber, this.customerName)
            .subscribe(
              response => this.loans = response,
              error => this.errorMessage = <any>error);
    }
}