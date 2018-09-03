import { Component, OnInit } from '@angular/core';
import { SubCategorieService }   from './subcategories.service';
  
export class SubCategoriesListObject {
    public id:number;
    public nome:string;
    public categoria:string;
}

@Component({
    selector: 'subcategorie-cmp',
    moduleId: module.id,
    templateUrl: 'subcategories.component.html',
    providers:  [ SubCategorieService ]
})

export class SubCategoriesComponent implements OnInit{
    public status : boolean;
    public message : string;
    public data : SubCategoriesListObject[];

    public SubCategories = [];

    public SubCategoriesComponent: SubCategoriesComponent;
    constructor(private SubCategorieService: SubCategorieService) {
        this.SubCategorieService = SubCategorieService;
     }

     ngOnInit(){
        this.SubCategorieService.getSubCategories()
        .subscribe(
            data => this.SubCategories = data.data
            
          );
          console.log(this.SubCategories);
    }
}
