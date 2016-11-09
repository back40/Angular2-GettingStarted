import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';


import { IBorrower } from '../shared/interfaces'
import { CoreCustomersService } from '../shared/services/core-customers.service'

@Component({
    templateUrl: 'app/borrower/borrower-detail.component.html'
})
export class BorrowerDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Borrower Detail';
    borrower: IBorrower;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _borrowerService: CoreCustomersService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getBorrower(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBorrower(id: number) {
        this._borrowerService.getBorrower(id).subscribe(
            borrower => this.borrower = borrower,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/borrowers']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Borrower Detail: ' + message;
    }
}
