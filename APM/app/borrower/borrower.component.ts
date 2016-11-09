import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBorrower } from '../shared/interfaces'
import { CoreCustomersService } from '../shared/services/core-customers.service'

@Component({
    moduleId: module.id,
    selector: 'borrower-main',
    templateUrl: 'borrower.component.html'
})
export class BorrowerComponent implements OnInit {

    borrowers: IBorrower[];
    errorMessage: string;
    taxIdNumber: string; 
    customerName: string; 


    constructor(public _coreCustomersService: CoreCustomersService) { }

    ngOnInit() {

      
     }
  
    findBorrowers(): void {

        this._coreCustomersService.getBorrowers(this.taxIdNumber, this.customerName)
            .subscribe(
              response => this.borrowers = response,
              error => this.errorMessage = <any>error);
    }
}