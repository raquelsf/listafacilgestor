import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {EstablishmentService} from '../establishments.service';
import {Establishment} from '../establishments';
import {Categorie} from '../../categories/categorie';
import {ActivatedRoute} from '@angular/router';
import Swal from "sweetalert2";

@Component({
    selector: 'app-establishments-form-data',
    templateUrl: './establishments-form-data.component.html',
    styleUrls: ['./establishments-form-data.component.css']
})
export class EstablishmentsFormDataComponent implements OnInit {
    public Categories = [];
    public SubCategories = [];
    public Establishment = new Establishment();
    public fileToUpload: File;
    public SubCategorie = 1;
    public idEstablishment: any;
    nome;
    @Output() btnSave = new EventEmitter();

    constructor(private _route: ActivatedRoute,
                private EstablishmentService: EstablishmentService) {
        this.EstablishmentService = EstablishmentService;
    }
    public maskPhone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    public maskPhone2= ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];


    ngOnInit() {
        this.EstablishmentService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );

        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');
            if (id > 0) {
                this.getEstablishment(id);
            }
        });
    }

    public getSubCategories(e) {
        this.EstablishmentService.getSubCategoriesList(e.value)
            .subscribe(
                data => this.SubCategories = data.data
            );
    }

    public onSubmit(Establishment) {
        Establishment.imagem = this.fileToUpload;
        Establishment.id_subcategoria = this.SubCategorie;
        console.log(Establishment);
        if (Establishment.email == undefined) {
            Establishment.email = '';
        }
        if (Establishment.telefone2 == undefined) {
            Establishment.telefone2 = '';
        }
        if (Establishment.instagram == undefined) {
            Establishment.instagram = '';
        }
        if (Establishment.facebook == undefined) {
            Establishment.facebook = '';
        }
        if (Establishment.id != undefined) {
            this.EstablishmentService.updateEstablishment(Establishment);
        } else {
            this.idEstablishment = this.EstablishmentService.saveEstablishment(Establishment)
                .then(res => {
                    if (res.json().status == 'true') {
                        Swal({
                            title: 'Tudo certo ate aqui!',
                            text: '',
                            type: 'success'
                        });
                        this.btnSave.emit(res.json().data.id);
                    } else {
                        Swal({
                            title: 'Ops!',
                            text: 'Ocorreu um erro inesperado.',
                            type: 'error'
                        });
                    }
                });
        }
    }

    public uploadFile(file: FileList) {
        this.fileToUpload = file[0];
    }

    public setSubCategorie(e) {
        this.SubCategorie = e.value;
    }

    getEstablishment(id) {
        this.EstablishmentService.showEstablishment(id)
            .subscribe(
                data => {
                    this.Establishment = data.data;
                });
    }
}
