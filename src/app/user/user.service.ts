import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class UserService {
  private usuarioAutenticado: boolean = false;

  private emitter = new BehaviorSubject<boolean>(false);

  constructor(
      private http: Http, 
      private router: Router
    ) { }


  public login(data){
    return this.http.post('http://listfacil.com/api/public/login', data)
    .toPromise().then(res => { 
      if(res.json().status == 'false'){
        this.usuarioAutenticado = false;
        this.emitter.next(false);
        Swal({
          title: 'Ops!',
          text: 'Usuário ou senha incorretos.',
          type: 'error'
        })
      }else{
        this.usuarioAutenticado = true;
        this.emitter.next(true);
        localStorage.setItem('token', 'JWT');
        this.router.navigate(['dashboard']);
      }
    });
  }

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
}

