import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: '<h1>{{paramsId}}</h1>'
})

export class CoursesComponent {
    paramsId: string;
    constructor(private route: ActivatedRoute) {
        this.paramsId = this.route.snapshot.params['id'];
    }
}
