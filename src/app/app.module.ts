import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {TextMaskModule} from 'angular2-text-mask';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {NguiMapModule} from '@ngui/map';
import {Select2Module} from 'ng2-select2';
import{FormBuilder, FormsModule, ReactiveFormsModule}  from '@angular/forms';
// import {UiSwitchModule} from 'ngx-ui-switch';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';

import {TypographyComponent} from './typography/typography.component';

import {CategoriesComponent} from './categories/categories.component';
import {SubCategoriesComponent} from './subcategories/subcategories.component';

import {CategorieService} from './categories/categories.service';
import {CategoriesFormComponent} from './categories/form.component';

import {SubCategorieService} from './subcategories/subcategories.service';
import {SubCategoriesFormComponent} from './subcategories/form.component';

import {EstablishmentsComponent} from './establishments/establishments.component';
import {EstablishmentService} from './establishments/establishments.service';

import {UserService} from './user/user.service';

import {EstablishmentsFormComponent} from './establishments/establishments-form/establishments-form.component';

import {DefaultLayoutComponent} from './containers';
import { SubcategoriesListComponent } from './subcategories/subcategories-list/subcategories-list.component';
import { EstablishmentsListComponent } from './establishments/establishments-list/establishments-list.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EstablishmentsFormAddressComponent } from './establishments/establishments-form-address/establishments-form-address.component';
import { EstablishmentsFormDataComponent } from './establishments/establishments-form-data/establishments-form-data.component';
import { EstablishmentsFormScheduleComponent } from './establishments/establishments-form-schedule/establishments-form-schedule.component';
import { PromotionsComponent } from './promotions/promotions.component';
const APP_CONTAINERS = [
    DefaultLayoutComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        DashboardComponent,
        UserComponent,
        TypographyComponent,
        CategoriesComponent,
        CategoriesFormComponent,
        SubCategoriesComponent,
        SubCategoriesFormComponent,
        EstablishmentsComponent,
        EstablishmentsFormComponent,
        SubcategoriesListComponent,
        EstablishmentsListComponent,
        EstablishmentsFormAddressComponent,
        EstablishmentsFormDataComponent,
        EstablishmentsFormScheduleComponent,
        PromotionsComponent
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
        Select2Module,
        BrowserModule,
        // UiSwitchModule,
        TextMaskModule,
        AccordionModule.forRoot(),
        TabsModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,

    ],
    providers: [
        CategorieService,
        SubCategorieService,
        EstablishmentService,
        UserService,
        FormBuilder
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
