import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class InvestmentService {
    constructor(private http: Http) {
    }

    add(investmentData) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('http://localhost:3000/investments', investmentData, options)
            .subscribe(data => console.log(data));
    }

    fetchList() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('http://localhost:3000/investments', options);
    }

    delete(id) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete('http://localhost:3000/investments/' + id, options);
    }

    fetch(id) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('http://localhost:3000/investments/' + id, options);
    }

}