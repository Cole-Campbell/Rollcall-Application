import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //Declaration of variable and giving it a type as it cannot be changed.
  public isLoggedIn: boolean;

  constructor(public afService: AngularFire, private router: Router){
    //Checks to see if the user is logged in or not. If Auth is null then the user is
    //redirected to the login page. If true, then they are passed to the homepage.
    //If they are null, but end up in the homepage, the Firebase is set to write permissions
    //are set for those who are not null

    //If statement placed to prevent error with logging in on production app. Error was being
    //thrown as auth was not being fulfilled if a user was not logged in, which caused the
    //response of the subscription to be null. Now the subscription will only run if auth is
    //not null.
    if(this.afService.auth != null) {
      this.afService.auth.subscribe(
        (auth) => {
          //If auth is null, then a user is redirected to the login page.
          if (auth == null) {
            //console.log("Not Logged in.");
            this.router.navigate(['login']);
            this.isLoggedIn = false;
          }
          //If auth is not null then the user is logged in as the auth is given the user's
          //auth object.
          else if (auth != null) {
            //console.log("Successfully Logged In.");
            this.isLoggedIn = true;
            this.router.navigate(['']);
          }
        }
      );
    }
  }

  //Logout function to remove the user's loggedin status, pushing them back to the homepage.
  logout() {
    this.afService.auth.logout();
  }

}
