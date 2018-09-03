import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { EstablishmentsComponent }   from './establishments.component';

@Injectable()
export class EstablishmentService {
  constructor(
      private http: Http, 
    ) { }

  public getEstablishments() :Observable<EstablishmentsComponent> {
    return this.http.get('http://localhost:8000/establishments')
    .map(res=> res.json()); 
  }
  
  public getCities() :Observable<EstablishmentsComponent> {
    return this.http.get('http://localhost:8000/cities/list')
    .map(res=> res.json()); 
  }

  public getStreets() :Observable<EstablishmentsComponent> {
    return this.http.get('http://localhost:8000/streets/list')
    .map(res=> res.json()); 
  }

  public getNeighborhoods() :Observable<EstablishmentsComponent> {
    return this.http.get('http://localhost:8000/neighborhoods/list')
    .map(res=> res.json()); 
  }


}

