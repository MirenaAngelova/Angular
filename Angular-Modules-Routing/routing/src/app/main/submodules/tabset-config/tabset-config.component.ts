import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'softuni-tabset-config',
  templateUrl: './tabset-config.component.html',
  styleUrls: ['./tabset-config.component.scss'],
  providers: [NgbTabsetConfig]
})
export class TabsetConfigComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}
