import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

import { editGroup } from '../interfaces/editGroup';
import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css'],
  providers: [GenerateArrayService]
})
export class EditGroupComponent implements OnInit {

  groupId: String;

  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;

  group = new editGroup('',false,[]);

  constructor(public af: AngularFire, private router: Router, public gas: GenerateArrayService) {
    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');
  }

  ngOnInit() {
    this.groupId = this.router.url.split('/')[2];
    console.log(this.groupId);
  }

  editGroup(group: any) {
    this.groups.update(group.$key,{name: group.name, classId: group.classId});
    this.router.navigate(['']);
  }

}
