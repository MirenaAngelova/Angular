import { Injectable } from '@angular/core';

@Injectable()

export class CustomerService {
    getAllCustomers() {
        return [
            {
                id: 0,
                name: 'Kiro'
            },
            {
                id: 1,
                name: 'Gosho'
            },
            {
                id: 2,
                name: 'Harry'
            }
        ];
    }
}
