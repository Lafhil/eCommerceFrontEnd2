import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AddProductComponent} from "./admin/add-product/add-product.component";

const routes:Routes=[{path:'',component:AppLayoutComponent,
children:[{path:'',component:AddProductComponent}]
}]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
