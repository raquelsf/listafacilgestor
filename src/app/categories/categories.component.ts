import {Component, OnInit} from '@angular/core';
import {CategorieService} from './categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

export class CategoriesListObject {
    public id: number;
    public nome: string;
    public imagem: string;
}

@Component({
    selector: 'categorie-cmp',
    moduleId: module.id,
    templateUrl: 'categories.component.html',
    providers: [CategorieService]
})
export class CategoriesComponent implements OnInit {
    public status: boolean;
    public message: string;
    public data: CategoriesListObject[];

    public Categories = [];

    public CategoriesComponent: CategoriesComponent;

    constructor(private CategorieService: CategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.CategorieService = CategorieService;
    }

    ngOnInit() {
        this.getCategories();
    }

    edit(e) {
        this._router.navigate(['categories/edit/', e.target.id]);
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
                this.CategorieService.deleteCategorie(e.target.id);
                this.getCategories();
            }
        });

    }

    getCategories(){
        this.CategorieService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );
    }

}
