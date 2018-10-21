import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { CategoriesComponent }   from './categories/categories.component';
import { SubCategoriesComponent }   from './subcategories/subcategories.component';
import { SubCategoriesFormComponent }   from './subcategories/form.component';
import { CategoriesFormComponent }   from './categories/form.component';
import { EstablishmentsComponent }   from './establishments/establishments.component';
import { EstablishmentsFormComponent }   from './establishments/form.component';

export const AppRoutes: Routes = [
    {
        path: 'api/',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'api/login',
        component: UserComponent
    },
    {
        path: 'api/dashboard',
        component: DashboardComponent
    },
    {
        path: 'api/user',
        component: UserComponent
    },
    {
        path: 'api/categories',
        component: CategoriesComponent
    },
    {
        path: 'api/subcategories',
        component: SubCategoriesComponent
    },
    {
        path: 'api/subcategories/register',
        component: SubCategoriesFormComponent
    },
    {
        path: 'api/categories/register',
        component: CategoriesFormComponent
    },
    {
        path: 'api/establishments',
        component: EstablishmentsComponent
    },
    {
        path: 'api/establishments/register',
        component: EstablishmentsFormComponent
    }
]
