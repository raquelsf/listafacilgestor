import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {CategoriesComponent} from './categories/categories.component';
import {SubCategoriesComponent} from './subcategories/subcategories.component';
import {SubCategoriesFormComponent} from './subcategories/form.component';
import {CategoriesFormComponent} from './categories/form.component';
import {EstablishmentsComponent} from './establishments/establishments.component';
import {EstablishmentsFormComponent} from './establishments/establishments-form/establishments-form.component';

import {DefaultLayoutComponent} from './containers';

export const AppRoutes: Routes = [
    {
        path: 'login',
        component: UserComponent
    },

    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },

        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
            {
                path: 'subcategories',
                component: SubCategoriesComponent
            },
            {
                path: 'subcategories/register',
                component: SubCategoriesFormComponent
            },
            {
                path: 'subcategories/edit/:id',
                component: SubCategoriesFormComponent
            },
            {
                path: 'categories/register',
                component: CategoriesFormComponent
            },
            {
                path: 'categories/edit/:id',
                component: CategoriesFormComponent
            },
            {
                path: 'establishments',
                component: EstablishmentsComponent
            },
            {
                path: 'establishments/register',
                component: EstablishmentsFormComponent
            },
            {
                path: 'establishments/edit/:id',
                component: EstablishmentsFormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
