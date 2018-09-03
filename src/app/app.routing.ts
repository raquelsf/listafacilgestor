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
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
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
        path: 'categories/register',
        component: CategoriesFormComponent
    },
    {
        path: 'establishments',
        component: EstablishmentsComponent
    },
    {
        path: 'establishments/register',
        component: EstablishmentsFormComponent
    }
]
