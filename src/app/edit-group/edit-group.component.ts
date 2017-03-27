import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css'],
  providers: [GenerateArrayService]
})

export class EditGroupComponent implements OnInit {

  groupId: any;

  groupName: string;
  groupClassId: any;

  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService,
              public fb: FormBuilder) {

    this.groups = af.database.list('/Groups', this.groupId);
    this.classes = af.database.list('/ClassLists');

    //console.log(this.groupId);

    this.groups.subscribe(response => {
       if(this.groupId != null) {
         this.groupName = response.name;

       }

    });

    this.form = fb.group({
      'name' : [this.groupName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'archive' : false,
      'classId' : [[], Validators.required]
    });
  }

  ngOnInit() {
    this.groupId = this.router.url.split('/')[2];
  }

  editGroup(value: any) {
    this.groups.update(this.groupId ,{name: value.name, classId: value.classId});
    this.router.navigate(['']);
  }

}
