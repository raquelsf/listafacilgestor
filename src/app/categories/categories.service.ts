import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {CategoriesComponent} from './categories.component';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';


@Injectable()
export class CategorieService {
    public headers: Headers;

    constructor(
        private http: Http,
        private router: Router
    ) {
        const headers = new Headers();
        // headers.append('Content-Type', 'multipart/form-data');
        headers.delete('Content-Type');
        // headers.append("enctype", "multipart/form-data");

        // // IE workaround for Cache issues
        // headers.append("Cache-Control", "no-cache");
        // headers.append("Cache-Control", "no-store");
        // headers.append("Pragma", "no-cache");
    }

    public getCategories(): Observable<CategoriesComponent> {
        return this.http.get('http://listfacil.com/api/public/categories')
            .map(res => res.json());
    }

    public showCategorie(id): Observable<CategoriesComponent> {
        return this.http.get('http://listfacil.com/api/public/categories/' + id)
            .map(res => res.json());
    }


    public saveCategorie(data) {
        const form: FormData = new FormData();
        form.append('file', data.file);
        form.append('nome', data.nome);
        return this.http.post('http://listfacil.com/api/public/categories', form).toPromise().then(res => {
            console.log(res);
            if (res.json().status == 'true') {
                Swal({
                    title: 'Pronto!',
                    text: 'Categoria cadastrada com sucesso.',
                    type: 'success'
                })
                this.router.navigate(['categories']);
            } else {
                Swal({
                    title: 'Ops!',
                    text: 'Ocorreu um erro inesperado.',
                    type: 'error'
                });
            }
        });
    }

}

