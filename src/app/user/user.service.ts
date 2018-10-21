import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { UserComponent }   from './user.component';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(
      private http: Http, 
      private router: Router
    ) { }

  public login($data){
    return this.http.post('http://listfacil.com/public/login', $data)
    .toPromise().then(res => { 
      if(res.json().status == 'false'){
        Swal({
          title: 'Ops!',
          text: 'Usuário ou senha incorretos.',
          type: 'error'
        })
      }else{
        Swal({
          title: 'Bem Vindo!',
          text: '',
          confirmButtonText: 'Ok!',
          type: 'success'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['api/dashboard'], { queryParams: { user: true }});
          }
        });
      }
    });
  }
}

