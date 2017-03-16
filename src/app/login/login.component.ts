import { Component } from '@angular/core';
import { AF } from '../providers/af';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: "login.component.html",
  styles: []
})
export class LoginComponent {

  constructor(public afService: AF, private router: Router) {}
  login() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })
  }
}
