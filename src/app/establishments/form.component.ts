import { Component, OnInit } from '@angular/core';
import { EstablishmentService }   from './establishments.service';
  
export class EstablishmentsListObject {
    public id:number;
    public nome:string;
    public categoria:string;
    public text:string;
    
<<<<<<< HEAD
=======
}
export class Select2Options {
    public width:string;
    public placeholder:string;
    public allowClear:string;
>>>>>>> 91f50606e792123565508f97691b37008664ba11
}


@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'establishmentsForm.component.html',
    providers:  [ EstablishmentService ],
    styles: [`
        :host >>> .select2-container {
                    width: 40px;
        }
    `]
})
export class EstablishmentsFormComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : EstablishmentsListObject[];

    public Establishments = [];
    public Cities = [];
    public Neighborhoods = [];
    public Streets = [];
<<<<<<< HEAD
    public SubCategories = [];
    public Categories = [];

    public open(event, item) {
        alert('Open ' + item);
    }
=======
    public exampleData = [];
    public optionsSelect : Select2Options[];
    
>>>>>>> 91f50606e792123565508f97691b37008664ba11
    public EstablishmentsFormComponent: EstablishmentsFormComponent;
    constructor(private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
     }

     ngOnInit(){
        this.EstablishmentService.getEstablishments()
        .subscribe(
            data => this.Establishments = data.data
          );
        this.EstablishmentService.getCities()
        .subscribe(
            data => this.Cities = data.data
        ); 
        this.EstablishmentService.getNeighborhoods()
        .subscribe(
            data => this.Neighborhoods = data.data
        ); 
        this.EstablishmentService.getStreets()
        .subscribe(
            data => this.Streets = data.data
        );
<<<<<<< HEAD
        this.EstablishmentService.getSubCategories()
        .subscribe(
            data => this.SubCategories = data.data
            
          );
        this.EstablishmentService.getCategories()
        .subscribe(
            data => this.Categories = data.data
            
          );
=======

        this.optionsSelect = {
            placeholder: "Select option...",
            allowClear: true,
            width: "100%"
          }
>>>>>>> 91f50606e792123565508f97691b37008664ba11
    }
}
