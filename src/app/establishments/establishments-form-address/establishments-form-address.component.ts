import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from '../establishments.service';
import {CepService} from '../../cep.service';
import {Cep} from '../../cep';

@Component({
    selector: 'app-establishments-form-address',
    templateUrl: './establishments-form-address.component.html',
    styleUrls: ['./establishments-form-address.component.css'],
    providers: [EstablishmentService, CepService]

})
export class EstablishmentsFormAddressComponent implements OnInit {
    cep = new Cep();

    constructor(private EstablishmentService: EstablishmentService, private CepService: CepService) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit() {
    }

    public buscar(e) {
        console.log(e.target.value);
        this.CepService.buscar(e.target.value)
            .then((cep: Cep) => this.cep = cep);
        console.log(this.cep);
    }

}
