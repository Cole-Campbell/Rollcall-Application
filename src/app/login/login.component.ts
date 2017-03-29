//Login Component. Holds the login which is used on the initial visit.
import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  template: `
  <button class="btn btn-success center-block" (click)="login()">Login via Google</button>
  `,
  styles: []
})

export class LoginComponent {
  constructor(public af: AngularFire) {}

  //Login function which calls to angular fire, checks the providers and methods and proceeds
  //As this app uses google, it will bring up a google popup as the method is set to pop up.
  //These are set within the app.module.
  login() {
    this.af.auth.login();
  }
}
