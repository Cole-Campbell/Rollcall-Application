import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GenerateArrayService]
})
export class GroupComponent implements OnInit {

  groupId: String;

  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private router: Router, public gas: GenerateArrayService) {
    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');
  }

  ngOnInit() {
    //console.log(this.router.url);
    //console.log(this.router.url.split('/')[2]);
    this.groupId = this.router.url.split('/')[2];
  }

}
