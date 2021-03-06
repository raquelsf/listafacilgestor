import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EstablishmentService} from '../establishments.service';
import {Cep} from '../../cep';
import * as cep from 'cep-promise';
import {Address} from './address';
import {Establishment} from '../establishments';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-establishments-form-address',
    templateUrl: './establishments-form-address.component.html',
    styleUrls: ['./establishments-form-address.component.css'],
    providers: [EstablishmentService]

})
export class EstablishmentsFormAddressComponent implements OnInit {
    public Cep = new Cep();
    public Address = new Address();

    public maskCep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

    @Input() idEstablishment: any;
    @Output() btnSave = new EventEmitter();

    constructor(private _route: ActivatedRoute,
                private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit() {
        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');
            console.log(this.idEstablishment);
            if (id > 0) {
                this.getAddres(id);
            }
        });
    }

    public buscar(e) {
        const formatedCep = e.target.value.replace(/[^\d]+/g, '')
        fetch('https://api.pagar.me/1/zipcodes/' + formatedCep, {method: 'get'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.Cep = data;
                console.log(this.Cep);
                this.Address.cidade = this.Cep.city;
                this.Address.rua = this.Cep.street;
                this.Address.bairro = this.Cep.neighborhood;
            });
    }

    public onSubmit(Address: Address) {
        console.log(this.idEstablishment);
        if (Address.id != undefined) {
            this.EstablishmentService.updateEstablishmentAddress(Address)
        } else {
            this.EstablishmentService.saveEstablishmentAddress(Address, this.idEstablishment)
                .then(res => {
                    if (res.json().status == 'true') {
                        Swal({
                            title: 'Tudo certo ate aqui!',
                            text: '',
                            type: 'success'
                        });
                        this.btnSave.emit(this.idEstablishment);
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

    getAddres(id) {
        this.EstablishmentService.showAddres(id)
            .subscribe(
                data => {
                    this.Address = data.data;
                });
    }
}
