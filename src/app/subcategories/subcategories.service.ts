import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { SubCategoriesComponent }   from './subcategories.component';

@Injectable()
export class SubCategorieService {
  constructor(
      private http: Http, 
    ) { }

  public getSubCategories() :Observable<SubCategoriesComponent> {
    return this.http.get('http://localhost:8000/subcategories')
    .map(res=> res.json()); 
  }

  public getCategories() :Observable<SubCategoriesComponent> {
    return this.http.get('http://localhost:8000/categories')
    .map(res=> res.json()); 
  }

}

