import {Component, OnInit} from '@angular/core';
import {SubCategorieService} from './subcategories.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

export class SubCategoriesListObject {
    public id: number;
    public nome: string;
    public categoria: string;
}

@Component({
    selector: 'subcategorie-cmp',
    moduleId: module.id,
    templateUrl: 'subcategories.component.html',
    providers: [SubCategorieService]
})

export class SubCategoriesComponent implements OnInit {
    public status: boolean;
    public message: string;
    public data: SubCategoriesListObject[];

    public SubCategories = [];
    public Categories = [];

    public SubCategoriesComponent: SubCategoriesComponent;

    constructor(private SubCategorieService: SubCategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.SubCategorieService = SubCategorieService;
    }

    ngOnInit() {
        this.SubCategorieService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );
    }
}
