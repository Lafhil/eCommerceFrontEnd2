import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { NavBarComponent } from './template/nav-bar/nav-bar.component';
import {ProductFormComponent} from "./CompenentsCore/product-form/product-form.component";
import { SlideMenuModule } from "primeng/slidemenu";
import { ButtonModule } from "primeng/button";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,

    ProductFormComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ButtonModule,
    MegaMenuModule,
    MenuModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
