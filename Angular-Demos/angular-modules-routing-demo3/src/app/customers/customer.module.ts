import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerService } from './customer.service';

@NgModule({
    imports: [CommonModule],
    declarations: [
        CustomerListComponent,
        CustomerDetailsComponent,
        CustomerCreateComponent
    ],
    providers: [CustomerService],
    exports: [CustomerListComponent]

})

export class CustomerModule {

}
