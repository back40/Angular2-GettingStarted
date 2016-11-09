import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IBorrower } from '../interfaces';

@Injectable()
export class CoreCustomersService {
    private _borrowerUrl = `http://core.wtdomain.com/api-v2.0/Customers?$filter=`;
    private _borrowerDetailUrl = `http://core.wtdomain.com/api-v2.0/Customers`;
    
    constructor(private _http: Http) { }

    getBorrowers(taxIdNumber: string, customerName: string): Observable<IBorrower[]> {
        let accountFilter = ''; 
        let nameFilter = ''; 
        if (taxIdNumber && customerName) {
				accountFilter = `TaxIdNumber eq '` + taxIdNumber + `'`;
                nameFilter = `or substringof('`+ customerName + `', CustomerFullName)`;
			}
        else if (!taxIdNumber && customerName ) {
                nameFilter = `substringof('`+ customerName + `', CustomerFullName)`;
			}
        else if (taxIdNumber && !customerName) {
              accountFilter = `TaxIdNumber eq '` + taxIdNumber + `'`;
			}
        return this._http.get(this._borrowerUrl + accountFilter + nameFilter, { withCredentials: true })
            .map((response: Response) => response.json())
            .map(data => <IBorrower[]> data.value)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);

           
    }

    getBorrower(CustomerNumber: string): Observable<IBorrower> {
      let customerFilter = ''; 
        
        if (customerFilter) {
                customerFilter = `('`+ CustomerNumber + `')`;
			}
 
        return this._http.get(this._borrowerUrl + customerFilter, { withCredentials: true })
            .map((response: Response) => response.json())
            .map(data => <IBorrower[]> data.value)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private resetLoanUrl(){

        this._borrowerUrl = `http://core.wtdomain.com/api-v2.0/Customers?$filter='`;
    }
}
