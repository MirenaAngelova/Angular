import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './books.service';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'books',
    templateUrl: './books.component.html',
})

export class BooksComponent implements OnInit {
    public books: Book[];
    constructor(private booksService: BooksService) {

    }
    ngOnInit(): void {
        this.books = this.booksService.getData();
    }
}



