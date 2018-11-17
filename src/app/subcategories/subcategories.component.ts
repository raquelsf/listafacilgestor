import { Component, OnInit } from '@angular/core';
import { SubCategorieService }   from './subcategories.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2'

export class SubCategoriesListObject {
    public id:number;
    public nome:string;
    public categoria:string;
}

@Component({
    selector: 'subcategorie-cmp',
    moduleId: module.id,
    templateUrl: 'subcategories.component.html',
    providers:  [ SubCategorieService ]
})

export class SubCategoriesComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : SubCategoriesListObject[];

    public SubCategories = [];

    public SubCategoriesComponent: SubCategoriesComponent;
    constructor(private SubCategorieService: SubCategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.SubCategorieService = SubCategorieService;
     }

     ngOnInit(){
        this.SubCategorieService.getSubCategories()
        .subscribe(
            data => this.SubCategories = data.data
            
          );
          console.log(this.SubCategories);
    }

    edit(e) {
        this._router.navigate(['subcategories/edit/', e.target.id]);
    }

    delete(e) {
        Swal({
            title: 'Deseja mesmo excluir?',
            text: 'Você não poderá reverter essa exclusão!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Desejo excluir',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.SubCategorieService.deleteSubCategorie(e.target.id);
            }
        })

    }

}
