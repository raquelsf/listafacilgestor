import {Component, OnInit} from '@angular/core';
import {CategorieService} from './categories.service';
import {Categorie} from './categorie';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'categoriesForm.component.html',
    styleUrls: ['categoriesForm.component.css'],
    providers: [CategorieService]
})
export class CategoriesFormComponent implements OnInit {
    public status: boolean;
    public message: string;
    public Categorie: Categorie = new Categorie();
    public fileToUpload: File;
    name;
    errors;
    public CategoriesFormComponent: CategoriesFormComponent;

    constructor(private CategorieService: CategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.CategorieService = CategorieService;
    }

    ngOnInit() {
        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');
            console.log(id);
            this.getCategorie(id);
            // this.Categorie = this.Categorie[0];
        });
    }


    public onSubmit(Categorie: Categorie) {
        Categorie.file = this.fileToUpload;
        if (Categorie.id){
            if(! Categorie.nome){
                this.errors.nome == true;
            } else{
                this.CategorieService.updateCategorie(Categorie).then(data=>{
                });
            }
        } else {
            if ( !Categorie.file ){
                this.errors.imagem == true;

            } else if(! Categorie.nome){
                this.errors.nome == true;
            } else{
                this.CategorieService.saveCategorie(Categorie).then();
            }

        }
    }

    public uploadFile(file: FileList) {
        this.fileToUpload = file[0];
    }

    private getCategorie(id) {
        this.CategorieService.showCategorie(id)
            .subscribe(
                data => {
                    this.Categorie.nome = data.data['nome'];
                    this.Categorie.imagem = data.data['imagem'];
                    this.Categorie.id = data.data['id'];
                    // if (data.status == true) {
                    //     console.log(data.data['nome']);
                    // } else {
                    //     // this.vazio = true;
                    // }

                });
    }

}
