import { Component, OnInit } from '@angular/core';
import { SubCategorieService }   from './subcategories.service';
  
export class SubCategoriesListObject {
    public id:number;
    public nome:string;
    public categoria:string;
}

@Component({
    selector: 'subcategorieform-cmp',
    moduleId: module.id,
    templateUrl: 'subcategoriesForm.component.html',
    providers:  [ SubCategorieService ]
})
export class SubCategoriesFormComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : SubCategoriesListObject[];

    public SubCategories = [];
    public Categories = [];

    public SubCategoriesFormComponent: SubCategoriesFormComponent;
    constructor(private SubCategorieService: SubCategorieService) {
        this.SubCategorieService = SubCategorieService;
     }

     ngOnInit(){
        this.SubCategorieService.getSubCategories()
        .subscribe(
            data => this.SubCategories = data.data
            
          );

        this.SubCategorieService.getCategories()
        .subscribe(
            data => this.Categories = data.data
            
          );

          
    }
}
