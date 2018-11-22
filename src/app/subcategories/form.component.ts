import {Component, OnInit} from '@angular/core';
import {SubCategorieService} from './subcategories.service';
import {Subcategorie} from './subcategorie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'subcategorieform-cmp',
    moduleId: module.id,
    templateUrl: 'subcategoriesForm.component.html',
    providers: [SubCategorieService]
})
export class SubCategoriesFormComponent implements OnInit {
    public status: boolean;
    public message: string;
    public SubCategorie: any;
    public Categories = [];

    public SubCategoriesFormComponent: SubCategoriesFormComponent;

    constructor(private SubCategorieService: SubCategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.SubCategorieService = SubCategorieService;
    }

    ngOnInit() {
        this.SubCategorieService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );

        this._route.paramMap.subscribe(parameterMap => {
            const id = parameterMap.get('id');
            console.log(id);
            this.getSubCategorie(id);
            console.log(this.SubCategorie);
        });
    }

    private getSubCategorie(id) {
        this.SubCategorieService.showSubCategorie(id)
            .subscribe(
                data => {
                    console.log(data.data['nome']);
                    this.SubCategorie.nome = data.data['nome'];
                    this.SubCategorie.id = data.data['id'];
                    this.SubCategorie.id_categoria = data.data['id_categoria'];
                    // if (data.status == true) {
                    //     console.log(data.data['nome']);
                    // } else {
                    //     // this.vazio = true;
                    // }

                });
    }

    public onSubmit(SubCategorie: Subcategorie) {
        console.log(SubCategorie);
        if (SubCategorie.id) {
            this.SubCategorieService.editSubCategorie(SubCategorie).then();
        } else {
            this.SubCategorieService.saveSubCategorie(SubCategorie).then();
        }
    }
}
