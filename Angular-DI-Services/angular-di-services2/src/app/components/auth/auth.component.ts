import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  token$;
  public payload: Object = {
    username: '',
    password: ''
  };

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.token$.unsubscribe();
  }

  retrieveData(e): void {
    this.payload[e.target.name] = e.target.value;
  }

  authUser() {
    this.token$ = this.authService.loginUser(this.payload)
    .subscribe(data => {
      sessionStorage.setItem('authtoken', data['authtoken']);
    });
  }
}
