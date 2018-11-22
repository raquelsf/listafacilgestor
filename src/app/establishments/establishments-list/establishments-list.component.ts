import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {SubCategorieService} from '../../subcategories/subcategories.service';
import {EstablishmentService} from '../establishments.service';

@Component({
    selector: 'app-establishments-list',
    templateUrl: './establishments-list.component.html',
    styleUrls: ['./establishments-list.component.css']
})
export class EstablishmentsListComponent implements OnInit {
    @Input() idSubCategorie: 0;
    public Establishments = [];

    constructor(private SubCategorieService: SubCategorieService,
                private EstablishmentService: EstablishmentService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.EstablishmentService = EstablishmentService;
    }

    ngOnInit() {
        if (this.idSubCategorie > 0) {
            console.log(this.idSubCategorie);

            this.EstablishmentService.getSubEstablishments(this.idSubCategorie)
                .subscribe(
                    data => this.Establishments = data.data
                );
            console.log(this.Establishments);
        } else {

        }
    }
    edit(e) {
        this._router.navigate(['establishments/edit/', e.target.id]);
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
                this.EstablishmentService.deleteEstablishment(e.target.id);
            }
        });

    }
}
