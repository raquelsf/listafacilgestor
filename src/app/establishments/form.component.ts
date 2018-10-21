import { Component, OnInit } from '@angular/core';
import { EstablishmentService }   from './establishments.service';

import { CepService }   from '../cep.service';
import { Cep }   from '../cep';
  
export class EstablishmentsListObject {
    public id:number;
    public nome:string;
    public categoria:string;
    public text:string;
}


@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'establishmentsForm.component.html',
    providers:  [ EstablishmentService, CepService ]
})
export class EstablishmentsFormComponent implements OnInit{
    cep = new Cep();

    public status : boolean;
    public message : string;
    public data : EstablishmentsListObject[];
    public Establishments = [];
    public Cities = [];
    public Neighborhoods = [];
    public Streets = [];
    public SubCategories = [];
    public Categories = [];
    public domingo = true;
    public segunda = true;
    public terca = true;
    public quarta = true;
    public quinta = true;
    public sexta = true;
    public sabado = true;
    public enable: any;

    public mask = [/[0-9]/,/[0-9]/, ':', /[0-9]/,/[0-9]/];
    public maskCep = [/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/, '-', /[0-9]/,/[0-9]/,/[0-9]/];

    public open(event, dia) {
        console.log(dia);
        if(event == true){
            if(dia == 'domingo'){
                this.domingo = false;
            }
            if(dia == 'segunda'){
                this.segunda = false;
            }
            if(dia == 'terca'){
                this.terca = false;
            }
            if(dia == 'quarta'){
                this.quarta = false;
            }
            if(dia == 'quinta'){
                this.quinta = false;
            }
            if(dia == 'sexta'){
                this.sexta = false;
            }
            if(dia == 'sabado'){
                this.sabado = false;
            }
        }else{
            if(dia == 'domingo'){
                this.domingo = true;
            }
            if(dia == 'segunda'){
                this.segunda = true;
            }
            if(dia == 'terca'){
                this.terca = true;
            }
            if(dia == 'quarta'){
                this.quarta = true;
            }
            if(dia == 'quinta'){
                this.quinta = true;
            }
            if(dia == 'sexta'){
                this.sexta = true;
            }
            if(dia == 'sabado'){
                this.sabado = true;
            }
        }
    }
    public EstablishmentsFormComponent: EstablishmentsFormComponent;
    constructor(private EstablishmentService: EstablishmentService, private CepService: CepService) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit(){
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

    public buscar(){
        this.CepService.buscar(this.cep.cep)
            .then((cep:Cep) => this.cep = cep);
            console.log(this.cep);
    }
}
