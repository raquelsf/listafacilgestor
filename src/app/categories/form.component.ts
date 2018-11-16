import {Component, OnInit} from '@angular/core';
import {CategorieService} from './categories.service';
import {Categorie} from './categorie';
import {ActivatedRoute, Router} from '@angular/router';

export class CategoriesListObject {
    public id: number;
    public nome: string;
    public imagem: string;
}

@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'categoriesForm.component.html',
    providers: [CategorieService]
})
export class CategoriesFormComponent implements OnInit {
    public status: boolean;
    public message: string;
    public Categorie: Categorie = new Categorie();
    public fileToUpload: File;
    public CategoriesFormComponent: CategoriesFormComponent;
    public data: CategoriesListObject[];

    constructor(private CategorieService: CategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.CategorieService = CategorieService;
    }

    ngOnInit() {
        this._route.paramMap.subscribe(parameterMap => {
            const id = +parameterMap.get('id');
            this.getCategorie(id);
        });
    }

    public onSubmit(Categorie: Categorie) {
        Categorie.file = this.fileToUpload;
        this.CategorieService.saveCategorie(Categorie).then();
    }

    public uploadFile(file: FileList) {
        this.fileToUpload = file[0];
    }

    private getCategorie(id) {
        this.CategorieService.showCategorie(id)
            .subscribe(
                data => this.data = data.data
            );
        console.log(this.data);
    }

}
