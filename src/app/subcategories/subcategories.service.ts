import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { SubCategoriesComponent }   from './subcategories.component';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable()
export class SubCategorieService {
  constructor(
      private http: Http, 
      private router: Router
    ) { }

  public getSubCategories() :Observable<SubCategoriesComponent> {
    return this.http.get('http://listfacil.com/api/public/subcategories')
    .map(res=> res.json()); 
  }

  public getCategories() :Observable<SubCategoriesComponent> {
    return this.http.get('http://listfacil.com/api/public/categories')
    .map(res=> res.json()); 
  }


  public saveSubCategorie(data){
    return this.http.post('http://listfacil.com/api/public/subcategories', data).toPromise().then(res => { 
      console.log(res);
      if(res.json().status == 'true'){
        Swal({
          title: 'Pronto!',
          text: 'Subategoria cadastrada com sucesso.',
          type: 'success'
        })
        this.router.navigate(['categories']);
      }else{
        Swal({
          title: 'Ops!',
          text: 'Ocorreu um erro inesperado.',
          type: 'error'
        })
      }
    });
  }
}

