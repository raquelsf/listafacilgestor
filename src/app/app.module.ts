import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { Select2Module } from 'ng2-select2';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';

import { TypographyComponent }   from './typography/typography.component';

import { CategoriesComponent }   from './categories/categories.component';
import { SubCategoriesComponent }   from './subcategories/subcategories.component';

import { CategorieService }   from './categories/categories.service';
import { CategoriesFormComponent }   from './categories/form.component';

import { SubCategorieService }   from './subcategories/subcategories.service';
import { SubCategoriesFormComponent }   from './subcategories/form.component';

import { EstablishmentsComponent }   from './establishments/establishments.component';
import { EstablishmentService }   from './establishments/establishments.service';
import { EstablishmentsFormComponent }   from './establishments/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TypographyComponent,
    CategoriesComponent,
    CategoriesFormComponent,
    SubCategoriesComponent,
    SubCategoriesFormComponent,
    EstablishmentsComponent,
    EstablishmentsFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    Select2Module

  ],
  providers: [
    CategorieService,
    SubCategorieService,
    EstablishmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
