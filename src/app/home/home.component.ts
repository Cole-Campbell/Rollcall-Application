//Basic imports for use throughout the application
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { EmailIdService } from '../services/email-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmailIdService]
})

export class HomeComponent {

  //Declaring the firebaselistobservable variable for use in the constructor, and the
  //ahowArchive variable to false as users will want to view their current groups on
  //initial login.
  groups: FirebaseListObservable<any>;
  showArchive: boolean = false;

  constructor(public af: AngularFire, public eis: EmailIdService) {

    //Binding the Database list route to the firebase list observable.
    this.groups = af.database.list('/Groups');
  }

  //Toggles between value of !showArchive and showArchive. This toggles on the home page
  //Between the current groups and archived groups.
  toggleArchive() {
    this.showArchive = !this.showArchive;
  }

  //Switches the archive value to 1 instead of 0 so the group is then archived.
  archiveGroup(key: string) {
    this.groups.update(key, {archive: 1});
  }

  //Switches the archive value to 0 instead of 1 so the group is no longer archived.
  unarchiveGroup(key: string) {
    this.groups.update(key, {archive: 0});
  }

  //Function to delete items within the Firebase. Basic functionality as it removes
  //content from the Firebase.
  deleteGroup(key: string) {
    this.groups.remove(key);
  }
}
