import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs"
import * as customerActions from '../../../states/customers/customer.action';
import * as fromCustomer from "../../../states/customers/customer.reducer";
import { Customer } from '../../../models/customer.model';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    //   styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
    public customers$: Observable<Customer[]>;
    public error$ : Observable<String>;

    constructor(private store: Store<fromCustomer.AppState>) { }

    ngOnInit() {
        this.store.dispatch(new customerActions.LoadCustomers());
        this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
        this.error$ = this.store.pipe(select(fromCustomer.getError));
    }

    deleteCustomer(customer : Customer){

        if(confirm('삭제하시겠습니까?')){
            this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
        }

    }

    editCustomer(customer : Customer){
        this.store.dispatch(new customerActions.LoadCustomer(customer.id));
    }

}
