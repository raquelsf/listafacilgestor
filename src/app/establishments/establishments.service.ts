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
import {CategoriesComponent} from '../categories/categories.component';

@Injectable()
export class EstablishmentService {
    public form;

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
        form.append('telefone', data.telefone);
        form.append('telefone2', data.telefone2);
        form.append('email', data.email);

        console.log(form);
        return this.http.post('http://listfacil.com/api/public/establishments', form).toPromise();

    }

    public updateEstablishment(data) {
        if(data.imagem){
            const formData: FormData = new FormData();
            formData.append('imagem', data.imagem);
            formData.append('nome', data.nome);
            formData.append('id_subcategoria', data.id_subcategoria);
            formData.append('desc', data.desc);
            formData.append('facebook', data.facebook);
            formData.append('instagram', data.instagram);
            formData.append('email', data.email);
            formData.append('id', data.id);
            this.form = formData;
        }else {
            this.form = data;
        }
        return this.http.post('http://listfacil.com/api/public/establishments/' + data.id, this.form).toPromise().then(res => {
            console.log(res);
            if (res.json().status == 'true') {
                Swal({
                    title: 'Pronto!',
                    text: 'Etabelecimento atualizado.',
                    type: 'success'
                })
            } else {
                Swal({
                    title: 'Ops!',
                    text: 'Ocorreu um erro inesperado.',
                    type: 'error'
                })
            }
        });
    }

    public saveEstablishmentAddress(data, id) {
        return this.http.post('http://listfacil.com/api/public/establishments/address/'+id, data).toPromise();
    }


    updateEstablishmentAddress(data){
        return this.http.post('http://listfacil.com/api/public/establishments/address/update/'+data.id, data).toPromise().then(res => {
            console.log(res);
            if (res.json().status == 'true') {
                Swal({
                    title: 'Pronto!',
                    text: 'Etabelecimento atualizado.',
                    type: 'success'
                })
            } else {
                Swal({
                    title: 'Ops!',
                    text: 'Ocorreu um erro inesperado.',
                    type: 'error'
                })
            }
        });
    }

    saveEstablishmentSchedule(data, id){

        return this.http.post('http://listfacil.com/api/public/schedules/' + id, data).toPromise();
    }

    public showEstablishment(id){
        return this.http.get('http://listfacil.com/api/public/establishments/' + id)
            .map(res => res.json());
    }
    public showAddres(id){
        return this.http.get('http://listfacil.com/api/public/establishments/address/' + id)
            .map(res => res.json());
    }
    public showSchedule(id){
        return this.http.get('http://listfacil.com/api/public/schedules/' + id)
            .map(res => res.json());
    }

    public deleteEstablishment(id) {
        return this.http.delete('http://listfacil.com/api/public/establishments/'+id).toPromise().then(res => {
            console.log(res);
            if (res.json().status == 'true') {
                Swal({
                    title: 'Pronto!',
                    text: 'Etabelecimento excluído.',
                    type: 'success'
                })
                this.router.navigate(['establishments']);
            } else {
                Swal({
                    title: 'Ops!',
                    text: 'Ocorreu um erro inesperado.',
                    type: 'error'
                })
            }
        });

    }
}

