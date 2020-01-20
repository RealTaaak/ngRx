import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions} from '@ngrx/effects';

import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { customerReducer } from 'src/app/states/customers/customer.reducer';
import { CustomerEffect } from 'src/app/states/customers/customer.effects';


const routes: Routes = [
    { path: "", component: CustomerComponent }]

@NgModule({
    declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('customers', customerReducer),
        EffectsModule.forFeature([CustomerEffect])
    ]
})
export class CustomersModule { }
