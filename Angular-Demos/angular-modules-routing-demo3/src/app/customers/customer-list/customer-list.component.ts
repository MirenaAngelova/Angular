import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../customer.service';


@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html'
})

export class CustomerListComponent implements OnInit {
    customers: Object[];
    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this.customerService.getAllCustomers();
    }
}
