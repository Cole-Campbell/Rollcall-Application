import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group',
  template: `
    <h1>{{ (groups | async | json)?.groupId }}</h1>
  `,
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupId: String;

  groups: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire, private router: Router) {
    this.groups = af.database.object('/Groups');
  }

  ngOnInit() {
    console.log(this.router.url);
    console.log(this.router.url.split('/')[2]);
    this.groupId = this.router.url.split('/')[2];

  }

}
