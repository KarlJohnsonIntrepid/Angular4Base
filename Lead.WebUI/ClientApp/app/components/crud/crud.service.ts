import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import ' rxjs/add/operator/map ';
import ' rxjs/add/operator/catch ';
import ' rxjs/add/observable/throw ';
import { CrudComponent } from './components/crud/crud.component';

class CrudService {

    constructor(private http: Http) {
    }

    getProducts(): Observable<Crud[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
export class Crud {
    id: number;
    title: string;
    firstName: string;
    surname: string;
}

