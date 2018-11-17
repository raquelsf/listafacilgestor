import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {EstablishmentsComponent} from './establishments.component';

@Injectable()
export class EstablishmentService {
    constructor(
        private http: Http,
    ) {
    }

    public getEstablishments(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/establishments')
            .map(res => res.json());
    }
    public getSubEstablishments(id): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/establishments/list/'+ id)
            .map(res => res.json());
    }


    public getSubCategories(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/subcategories')
            .map(res => res.json());
    }

    public getCategories(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/categories')
            .map(res => res.json());
    }
    public getSubCategoriesList(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/subcategories/establishments/list')
            .map(res => res.json());
    }

}

