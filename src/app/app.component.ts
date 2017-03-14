import { Component } from '@angular/core';
import { AF } from './providers/af';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roll Call App';

  public isLoggedIn: boolean;

  constructor(public afService: AF, private router: Router){
    //Checks to see if the user is logged in or not.
    this.afService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Not Logged in.");
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }
        else {
          console.log("Successfully Logged In.");
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }

}
