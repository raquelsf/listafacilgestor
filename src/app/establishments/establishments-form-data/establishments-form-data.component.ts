import {Component, OnInit} from '@angular/core';
import {EstablishmentService} from '../establishments.service';
import {Establishment} from '../establishments'
import {Categorie} from '../../categories/categorie';

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
    public SubCategorie = 0;

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

    public onSubmit(Establishment: Establishment) {
        Establishment.imagem = this.fileToUpload;
        Establishment.id_subcategoria = this.SubCategorie;
        this.EstablishmentService.saveEstablishment(Establishment).then();
    }

    public uploadFile(file: FileList) {
        this.fileToUpload = file[0];
    }

    public setSubCategorie(e) {
        this.SubCategorie = e.value;
    }
}
