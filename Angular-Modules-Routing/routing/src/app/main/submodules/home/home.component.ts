import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'softuni-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    config: NgbAccordionConfig
  ) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
  }

  selectTeam(e) {
    sessionStorage.setItem('token', e.target.innerHTML.toLowerCase());
    this.router.navigate(['/attack']);
  }
}
