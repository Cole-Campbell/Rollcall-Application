import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  template: `
  <button (click)="login()">Login</button>
  `,
  styles: []
})

export class LoginComponent {
  constructor(public af: AngularFire) {}
  login() {
    this.af.auth.login();
  }
}
