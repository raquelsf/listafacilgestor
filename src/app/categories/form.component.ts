import { Component, OnInit } from '@angular/core';
import { CategorieService }   from './categories.service';
  
export class CategoriesListObject {
    public id:number;
    public nome:string;
    public categoria:string;
}

@Component({
    selector: 'categorieform-cmp',
    moduleId: module.id,
    templateUrl: 'categoriesForm.component.html',
    providers:  [ CategorieService ]
})
export class CategoriesFormComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : CategoriesListObject[];

    public Categories = [];

    public CategoriesFormComponent: CategoriesFormComponent;
    constructor(private SubCategorieService: CategorieService) {
        this.SubCategorieService = SubCategorieService;
     }

     ngOnInit(){
        this.SubCategorieService.getCategories()
        .subscribe(
            data => this.Categories = data.data
            
          );
    }
}
