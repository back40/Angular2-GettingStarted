import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBorrower } from '../shared/interfaces'
import { CoreBorrowerMasterService } from '../shared/services/core-loanmaster.service'

@Component({
    moduleId: module.id,
    selector: 'borrower-main',
    templateUrl: 'borrower.component.html'
})
export class BorrowerComponent implements OnInit {

    loans: IBorrower[];
    errorMessage: string;
    taxIdNumber: string; 
    customerName: string; 


    constructor(public _coreBorrowerMasterService: BorrowerLoanMasterService) { }

    ngOnInit() {

      
     }
  
    findLoans(): void {

        this._coreBorrowerMasterService.getBorrowers(this.TaxIdNumber, this.customerName)
            .subscribe(
              response => this.loans = response,
              error => this.errorMessage = <any>error);
    }
}