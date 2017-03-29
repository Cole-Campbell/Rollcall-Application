import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { GenerateArrayService } from '../services/generate-array.service';
import { EmailIdService } from '../services/email-id.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GenerateArrayService, EmailIdService]
})

export class GroupComponent implements OnInit {

  //Setting Attendance to false to ensure users are showed which classlists are within a group
  showAttendance: boolean = false;

  //GroupId variable being set. The group ID is pulled from the URL and then bound
  groupId: String;

  //Declaring the various Observable variables for binding later.
  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;
  rollcalls: FirebaseListObservable<any>;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService,
              public eis: EmailIdService) {

    //Binding the variables with the database routes they will correspond with.
    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');
    this.rollcalls = af.database.list('/RollCalls');
    this.students = af.database.list('/Students');
  }

  ngOnInit() {
    //Binding the router URL fragment to the groupId
    this.groupId = this.router.url.split('/')[2];
  }

  //Function to change the value of showAttendance when called.
  toggleAttendance(){
    this.showAttendance = !this.showAttendance;
  }

}
