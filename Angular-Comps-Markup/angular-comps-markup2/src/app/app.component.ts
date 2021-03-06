import { Component } from '@angular/core';
import { data } from './../seed';

@Component({
  selector: 'note-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public articles;
    public targetedArticle: Object;
    constructor() {
      this.articles = data;
    }

    showDetails(id): void {
      this.targetedArticle = this.articles.find(a => a.id === id);
    }

    deleteArticle(id) {
      this.articles = this.articles.filter(a => a.id !== id);
      this.targetedArticle = null;
    }
}
