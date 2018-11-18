import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from '../establishments.service';

@Component({
    selector: 'app-establishments-form-data',
    templateUrl: './establishments-form-data.component.html',
    styleUrls: ['./establishments-form-data.component.css']
})
export class EstablishmentsFormDataComponent implements OnInit {
    public Categories = [];
    public SubCategories = [];

    constructor(private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit() {
        this.EstablishmentService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );
    }

    public getSubCategories(e) {
        this.EstablishmentService.getSubCategoriesList(e.value)
            .subscribe(
                data => this.SubCategories = data.data
            );
    }
}
