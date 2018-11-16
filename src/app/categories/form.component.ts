import { Component, OnInit } from '@angular/core';
import { CategorieService }   from './categories.service';
import { Categorie }   from './categorie';

@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'categoriesForm.component.html',
    providers:  [ CategorieService ]
})
export class CategoriesFormComponent implements OnInit{
    public status : boolean;
    public message : string;
    public Categorie : Categorie = new Categorie();
    public fileToUpload : File;
    public CategoriesFormComponent: CategoriesFormComponent;
    constructor(private CategorieService: CategorieService) {
        this.CategorieService = CategorieService;
     }

    ngOnInit(){
    }

    public onSubmit(Categorie: Categorie){
        Categorie.file = this.fileToUpload;
        this.CategorieService.saveCategorie(Categorie).then();
    }

    public uploadFile(file: FileList){
        this.fileToUpload = file[0];
    }
}
