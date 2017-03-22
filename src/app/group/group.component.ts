import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupId: String;

  groups: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private router: Router) {
    this.groups = af.database.list('/Groups');
  }

  ngOnInit() {
    console.log(this.router.url);
    console.log(this.router.url.split('/')[2]);
    this.groupId = this.router.url.split('/')[2];

  }

}