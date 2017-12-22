import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class InvestmentService {
    constructor(private http: Http) {
    }

    add(investmentData) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3000/investments', investmentData, options);
    }

    fetchList() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get('http://localhost:3000/investments', options);
    }

    delete(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.delete('http://localhost:3000/investments/' + id, options);
    }

    fetch(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get('http://localhost:3000/investments/' + id, options);
    }

}
