import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "customers",
        loadChildren: "./components/customers/customers.module#CustomersModule"
    },
    {
        path: "products",
        loadChildren: "./components/products/products.module#ProductsModule"
    },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
