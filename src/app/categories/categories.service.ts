import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { CategoriesComponent }   from './categories.component';

@Injectable()
export class CategorieService {
  constructor(
      private http: Http, 
    ) { }

  public getCategories() :Observable<CategoriesComponent> {
    return this.http.get('http://localhost:8000/categories')
    .map(res=> res.json()); 
  }

}

