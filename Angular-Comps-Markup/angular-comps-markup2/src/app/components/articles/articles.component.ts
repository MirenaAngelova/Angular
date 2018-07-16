import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  @Input() article;
  @Output() selection: EventEmitter<any> = new EventEmitter();
  sendData(targetId) {
    this.selection.emit(targetId);
  }
}
