import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css'],
  providers: [GenerateArrayService]
})

export class EditGroupComponent implements OnInit {

  groupId: any;

  //Declaring Observable variables
  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService) {

    //Binding the database list route to the variables
    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');

  }

  ngOnInit() {
    //Binding URL fragment to groupId variable for user in filtering the group that we want
    //to edit
    this.groupId = this.router.url.split('/')[2];
  }

  //Function is passed the values of the form. The values are then pushed to the groups table
  //in firebase. The user is then navigated home.
  editGroup(value: any) {
    this.groups.update(this.groupId ,{name: value.name, classId: value.classId});
    this.router.navigate(['']);
  }

}
