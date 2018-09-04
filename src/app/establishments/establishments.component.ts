import { Component, OnInit } from '@angular/core';
import { EstablishmentService }   from './establishments.service';
  
export class EstablishmentsListObject {
    public id:number;
    public nome:string;
    public categoria:string;
    public text:string;
}

@Component({
    selector: 'categorie-cmp',
    moduleId: module.id,
    templateUrl: 'establishments.component.html',
    providers:  [ EstablishmentService ]
})
export class EstablishmentsComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : EstablishmentsListObject[];

    public Establishments = [];

    public EstablishmentsComponent: EstablishmentsComponent;
    constructor(private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
     }

    ngOnInit(){

        this.EstablishmentService.getEstablishments()
        .subscribe(
            data => this.Establishments = data.data
            
          );
          
          console.log(this.Establishments);
      
    }
}
