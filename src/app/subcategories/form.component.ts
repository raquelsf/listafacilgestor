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
    public SubCategorie = new Subcategorie();
    public Categories = [];
    id_categoria;
    nome;
    public SubCategoriesFormComponent: SubCategoriesFormComponent;

    constructor(private SubCategorieService: SubCategorieService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.SubCategorieService = SubCategorieService;
    }

    ngOnInit() {


        this._route.paramMap.subscribe(parameterMap => {
            const id = parameterMap.get('id');
            if (id != undefined) {
                this.getSubCategorie(id);
                console.log(this.SubCategorie);
            } else {
            }
            this.getCategorie();
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
                });
    }

    public onSubmit(SubCategorie: Subcategorie) {
        console.log(SubCategorie);
        if (SubCategorie.id != undefined) {
            this.SubCategorieService.editSubCategorie(SubCategorie).then();
        } else {
            this.SubCategorieService.saveSubCategorie(SubCategorie).then();
        }
    }

    getCategorie() {
        this.SubCategorieService.getCategories()
            .subscribe(
                data => this.Categories = data.data
            );
    }
}
