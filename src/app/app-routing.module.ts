import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AddProductComponent} from "./admin/manageProduct/add-product/add-product.component";
import {CategorieComponent} from "./admin/categorie/categorie.component";
import {ListProductComponent} from "./admin/manageProduct/list-product/list-product.component";

const routes:Routes=[{path:'',component:AppLayoutComponent,
                      children:[{path:'',component:DashboardComponent},
                                {path:'addProduct',component:AddProductComponent},
                                  {path:'addCategorie',component:CategorieComponent},
                        {path: 'listProducts', component:ListProductComponent} ]
}]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
