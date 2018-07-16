import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {
  @Input() incomingArticle;
  @Output() selection: EventEmitter<any> = new EventEmitter();
  constructor() { }
  sendData(targetId) {
    this.selection.emit(targetId);
  }
}
