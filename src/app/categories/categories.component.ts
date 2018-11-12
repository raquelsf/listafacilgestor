import { Component, OnInit } from '@angular/core';
import { CategorieService }   from './categories.service';
  
export class CategoriesListObject {
    public id:number;
    public nome:string;
    public imagem:string;
}

@Component({
    selector: 'categorie-cmp',
    moduleId: module.id,
    templateUrl: 'categories.component.html',
    providers:  [ CategorieService ]
})
export class CategoriesComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : CategoriesListObject[];

    public Categories = [];

    public CategoriesComponent: CategoriesComponent;
    constructor(private CategorieService: CategorieService) {
        this.CategorieService = CategorieService;
     }

    ngOnInit(){
        this.CategorieService.getCategories()
        .subscribe(
            data => this.Categories = data.data
          );
          console.log(this.Categories);
    }
}
