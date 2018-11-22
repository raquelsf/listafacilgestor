import {Component, Input, OnInit} from '@angular/core';
import {SubCategorieService} from '../subcategories.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-subcategories-list',
    templateUrl: './subcategories-list.component.html',
    styleUrls: ['./subcategories-list.component.css']
})
export class SubcategoriesListComponent implements OnInit {
    @Input() idCategorie;
    public SubCategories = [];

    constructor(private SubCategorieService: SubCategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.SubCategorieService = SubCategorieService;
    }

    ngOnInit() {
        // if (this.idCategorie){
            this.SubCategorieService.getSubCategories(this.idCategorie)
                .subscribe(
                    data => this.SubCategories = data.data
                );
            console.log(this.SubCategories);
        // }else {

        // }

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
        });

    }

}
