import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {EstablishmentsComponent} from './establishments.component';
import {SubCategoriesComponent} from '../subcategories/subcategories.component';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable()
export class EstablishmentService {
    constructor(
        private http: Http,
        private router: Router
    ) {
    }

    public getEstablishments(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/establishments')
            .map(res => res.json());
    }

    public getSubEstablishments(id): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/establishments/list/' + id)
            .map(res => res.json());
    }

    public getSubCategories(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/subcategories/establishments/list')
            .map(res => res.json());
    }

    public getCategories(): Observable<EstablishmentsComponent> {
        return this.http.get('http://listfacil.com/api/public/categories')
            .map(res => res.json());
    }

    public getSubCategoriesList(id): Observable<SubCategoriesComponent> {
        return this.http.get('http://listfacil.com/api/public/subcategories/list/' + id)
            .map(res => res.json());
    }

    public saveEstablishment(data) {
        const form: FormData = new FormData();
        form.append('imagem', data.imagem);
        form.append('nome', data.nome);
        form.append('id_subcategoria', data.id_subcategoria);
        form.append('desc', data.desc);
        form.append('facebook', data.facebook);
        form.append('instagram', data.instagram);
        form.append('email', data.email);

        console.log(data);
        return this.http.post('http://listfacil.com/api/public/establishments', form).toPromise()

    }

    public saveEstablishmentAddress(data, id) {
        return this.http.post('http://listfacil.com/api/public/establishments/address/' + id, data).toPromise().then(res => {
            console.log(res);
        });
    }

    saveEstablishmentSchedule(data){
        return this.http.post('http://listfacil.com/api/public/schedules', data).toPromise()
    }
}

