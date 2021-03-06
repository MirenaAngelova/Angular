import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
import 'rxjs';

import { Laptop } from './../../models/laptop';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive.form.component.html'
})

export class ReactiveFormComponent implements OnInit {
    private processorValidationMesages = {
        required: 'Processor is required!',
        minLength: 'Processor should be at least 10 symbols long!'
    };

    private ramValidationMessages = {
        required: 'RAM is required!',
        maxLength: 'RAM should have no more than 10 symbols!'
    };

    private hardDiskValidationMessage = {
        min: 'Hard Disk should be between 500 and 3000 GB',
        max: 'Hard Disk should be between 500 and 3000 GB'
    };

    public laptopForm: FormGroup;
    public operatingSystems: string[];
    public processorMessage: string;
    public ramMessage: string;
    public hardDiskMessage: string;

    constructor(private fb: FormBuilder) {
        this.operatingSystems = ['windows 10', 'Linux', 'Mac OS'];
    }

    ngOnInit(): void {
        this.laptopForm = this.fb.group({
            processor: ['Intel core 17', Validators.compose([Validators.minLength(10), Validators.required])],
            ram: ['16 GB DDR3', [Validators.required, Validators.maxLength(10)]],
            hardDisk: [1000, [Validators.min(500), Validators.max(3000)]],
            os: this.operatingSystems[0]
        });

        this.laptopForm.get('os').valueChanges.subscribe(console.log);
        const processorControl = this.laptopForm.get('processor');
        processorControl.valueChanges.debounceTime(1000).subscribe(value => {
            this.setMessage(processorControl);
        });

        const ramControl = this.laptopForm.get('ram');
        ramControl.valueChanges.subscribe(value => {
            this.ramMessage = '';
            if ((ramControl.touched || ramControl.dirty) && ramControl.errors) {
                this.ramMessage = Object.keys(ramControl.errors)
                .map(key => this.ramValidationMessages[key])
                .join(' ');
            }
        });
    }

    addData(): void {
        this.laptopForm.setValue({
            processor: 'Intel Core 17',
            ram: '16 GB DDR4',
            hardDisk: 1000,
            os: this.operatingSystems[0]
        });
    }

    setMessage(c: AbstractControl): void {
        this.processorMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.processorMessage = Object.keys(c.errors)
            .map(key => this.processorValidationMesages[key])
            .join(' ');
        }
    }
}
