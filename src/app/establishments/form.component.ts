import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from './establishments.service';
import {CepService} from '../cep.service';
import {Cep} from '../cep';

export class EstablishmentsListObject {
    public id: number;
    public nome: string;
    public categoria: string;
    public desc: string;
    public facebook: string;
    public instagram: string;
    public email: string;
    public imagem: string;
    public rua: string;
    public estado: string;
    public cidade: string;
    public bairro: string;
    public cep: string;
    public numero: string;
    public complemento: string;
}


@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'establishmentsForm.component.html',
    providers: [EstablishmentService, CepService]
})
export class EstablishmentsFormComponent implements OnInit {
    cep = new Cep();

    public status: boolean;
    public message: string;
    public data: EstablishmentsListObject[];
    public Establishments = [];
    public Cities = [];
    public Neighborhoods = [];
    public Streets = [];
    public SubCategories = [];
    public Categories = [];

    public mask = [/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/];
    public maskCep = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

    public open(event, dia) {
        console.log(dia);
    }

    public EstablishmentsFormComponent: EstablishmentsFormComponent;

    constructor(private EstablishmentService: EstablishmentService, private CepService: CepService) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit() {
        this.EstablishmentService.getEstablishments()
            .subscribe(
                data => this.Establishments = data.data
            );
        this.EstablishmentService.getSubCategories()
            .subscribe(
                data => this.SubCategories = data.data
            );
        this.EstablishmentService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );
    }

    public buscar() {
        this.CepService.buscar(this.cep.cep)
            .then((cep: Cep) => this.cep = cep);
        console.log(this.cep);
    }

    public saveEstablishment() {
        console.log(this.data);
    }
}
