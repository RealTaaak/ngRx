import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './list/list.component';
import { ProductDetailComponent } from './detail/detail.component';



const routes: Routes = [
    { path: "", component: ProductListComponent },
    { path: ":id", component: ProductDetailComponent },
]


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsModule { }
