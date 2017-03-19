import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
  <button (click)="login()">Login</button>
  `,
  styles: []
})

export class LoginComponent {
  constructor(public af: AngularFire, private router: Router) {}
  login() {
    this.af.auth.login();
  }
}
