import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from './establishments.service';

export class EstablishmentsListObject {
    public id: number;
    public nome: string;
    public categoria: string;
    public text: string;
}

@Component({
    selector: 'categorie-cmp',
    moduleId: module.id,
    templateUrl: 'establishments.component.html',
    providers:  [ EstablishmentService ]
})
export class EstablishmentsComponent implements OnInit{
    public status: boolean;
    public message: string;
    public data: EstablishmentsListObject[];

    public SubCategories = [];

    public EstablishmentsComponent: EstablishmentsComponent;
    constructor(private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
     }

    ngOnInit() {
        this.EstablishmentService.getSubCategories()
            .subscribe(
                data => this.SubCategories = data.data
            );
        console.log(this.SubCategories);
    }
}
