import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ILoan } from '../interfaces';

@Injectable()
export class CoreLoanMasterService {
    private _loanUrl = `http://core.wtdomain.com/api-v2.0/LoanMaster?$filter=`;
    
    constructor(private _http: Http) { }

    getLoans(accountNumber: string, customerName: string): Observable<ILoan[]> {
        let accountFilter = ''; 
        let nameFilter = ''; 
        if (accountNumber && customerName) {
				accountFilter = `AccountNumber eq '` + accountNumber + `'`;
                nameFilter = `or substringof('`+ customerName + `', CustomerShortName)`;
			}
        else if (!accountNumber && customerName ) {
                nameFilter = `substringof('`+ customerName + `', CustomerShortName)`;
			}
        else if (accountNumber && !customerName) {
              accountFilter = `AccountNumber eq '` + accountNumber + `'`;
			}
        return this._http.get(this._loanUrl + accountFilter + nameFilter, { withCredentials: true })
            .map((response: Response) => response.json())
            .map(data => <ILoan[]> data.value)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);

           
    }

    // getLoan(accountNumber: number): Observable<ILoan> {
    //     return this.getLoans()
    //         .map((loans: ILoan[]) => loans.find(p => p.AccountNumber === accountNumber));
    // }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private resetLoanUrl(){

        this._loanUrl = `http://core.wtdomain.com/api-v2.0/LoanMaster?$filter='`;
    }
}
