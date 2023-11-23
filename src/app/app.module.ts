import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';

import { SlideMenuModule } from "primeng/slidemenu";
import { ButtonModule } from "primeng/button";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {AppLayoutModule} from "./layout/app.layout.module";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {DashboardModule} from "./admin/dashboard/dashboard.module";
import { AddProductComponent } from './admin/manageProduct/add-product/add-product.component';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { EditorModule } from 'primeng/editor';
import {TabViewModule} from "primeng/tabview";
import { FormsModule } from '@angular/forms';
import {InputSwitchModule} from "primeng/inputswitch";
import {FileUploadModule} from "primeng/fileupload";
import { DragDropuploadFileComponent } from './outile/drag-dropupload-file/drag-dropupload-file.component';
import {DragDirective} from "./outile/drag.directive";
import { CategorieComponent } from './admin/categorie/categorie.component';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import { ListProductComponent } from './admin/manageProduct/list-product/list-product.component';
import { TableModule } from 'primeng/table';
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    DragDropuploadFileComponent,
    DragDirective,
    CategorieComponent,
    ListProductComponent,


  ],
  imports: [
    TableModule,
    ToastModule,
    TreeModule,
    FormsModule,
    EditorModule,
    DashboardModule,
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ButtonModule,
    MegaMenuModule,
    MenuModule,
    BadgeModule,
    AppLayoutModule,
    AppRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    TabViewModule,
    InputSwitchModule,
    FileUploadModule,
    PanelModule,
    CardModule,
    ImageModule,
    ConfirmPopupModule,
    TagModule,
    RatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
