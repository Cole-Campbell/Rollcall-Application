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

  groupId: String;

  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService,
              public eis: EmailIdService) {
    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');
    this.students = af.database.list('/Students');
  }

  ngOnInit() {
    //console.log(this.router.url);
    //console.log(this.router.url.split('/')[2]);
    this.groupId = this.router.url.split('/')[2];
  }

}
