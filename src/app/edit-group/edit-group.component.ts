import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { FormGroup } from '@angular/forms';

import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css'],
  providers: [GenerateArrayService]
})

export class EditGroupComponent implements OnInit {

  groupId: any;

  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService) {

    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');

  }

  ngOnInit() {
    this.groupId = this.router.url.split('/')[2];
  }

  editGroup(value: any) {
    this.groups.update(this.groupId ,{name: value.name, classId: value.classId});
    this.router.navigate(['']);
  }

}
