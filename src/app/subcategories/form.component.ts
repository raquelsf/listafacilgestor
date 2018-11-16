import { Component, OnInit } from '@angular/core';
import { SubCategorieService }   from './subcategories.service';
import { Subcategorie }   from './subcategorie';


@Component({
    selector: 'subcategorieform-cmp',
    moduleId: module.id,
    templateUrl: 'subcategoriesForm.component.html',
    providers:  [ SubCategorieService ]
})
export class SubCategoriesFormComponent implements OnInit{
    public status : boolean;
    public message : string;
    public SubCategorie : Subcategorie = new Subcategorie();
    public Categories = [];

    public SubCategoriesFormComponent: SubCategoriesFormComponent;
    constructor(private SubCategorieService: SubCategorieService) {
        this.SubCategorieService = SubCategorieService;
     }

     ngOnInit(){
        this.SubCategorieService.getCategories()
        .subscribe(
            data => this.Categories = data.data
            
          );

          
    }

    public onSubmit(SubCategorie: Subcategorie){
        console.log(SubCategorie);
        this.SubCategorieService.saveSubCategorie(SubCategorie).then();
    }
}
