import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EstablishmentService} from '../establishments.service';
import {Cep} from '../../cep';
import * as cep from 'cep-promise';
import {Address} from './address';
import {Establishment} from '../establishments';

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

    constructor(private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit() {
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
        this.EstablishmentService.saveEstablishmentAddress(Address, this.idEstablishment)
        console.log(this.idEstablishment);
        this.btnSave.emit(this.idEstablishment);
    }
}
