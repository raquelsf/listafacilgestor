import { Component, OnInit } from '@angular/core';
import { EstablishmentService }   from './establishments.service';
  
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
    public SubCategories = [];
    public Categories = [];

    public open(event, item) {
        alert('Open ' + item);
    }
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
        this.EstablishmentService.getSubCategories()
        .subscribe(
            data => this.SubCategories = data.data
            
          );
        this.EstablishmentService.getCategories()
        .subscribe(
            data => this.Categories = data.data
            
          );
    }
}
