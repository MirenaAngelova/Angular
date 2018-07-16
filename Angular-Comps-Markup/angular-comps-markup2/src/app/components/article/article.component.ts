import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'note-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  public displayImage = false;
  public hide = false;
  public imageText = 'Show Image';
  public limit = 250;

  @Input() article;
  @Output() deleteArticleEmitter: EventEmitter<any> = new EventEmitter();

  limitDesc(text): string {
    return text.slice(0, this.limit);
  }

  showHideImage(): void {
    if (this.imageText === 'Show Image') {
      this.displayImage = true;
      this.imageText = 'Hide Image';
    } else {
      this.displayImage = false;
      this.imageText = 'Show Image';
    }
  }

  readMore(): void {
    if (this.limit >= this.article.text.length) {
      this.hide = true;
    }
    this.limit += 250;
  }

  hideDesc(): void {
    this.hide = false;
    this.limit = 250;
  }

  deleteArticle(id): void {
    this.deleteArticleEmitter.emit(id);
  }
}
