import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-rollcall',
  templateUrl: './rollcall.component.html',
  styles: [],
  providers: [GenerateArrayService]
})
export class RollcallComponent implements OnInit {

  groupId: any;
  date: any;

  groups: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;
  rollcall: FirebaseListObservable<any>;
  rollcallEntry: FirebaseListObservable<any>;
  classLists: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService,
              public fb: FormBuilder) {
    this.groups = af.database.list('/Groups');
    this.students = af.database.list('/Students');
    this.rollcall = af.database.list('/RollCalls');
    this.classLists = af.database.list('/ClassLists');
    this.rollcallEntry= af.database.list('/RollCallEntry');

    this.form = fb.group({
      'name' : [null, Validators.compose([Validators.required])],
      'present' : [[], Validators.required]
    })
  }

  ngOnInit() {
    this.groupId = this.router.url.split('/')[2];
    this.date = new Date();
    console.log(this.date);
  }

  submitRollcall(value: any) {
    console.log(value);
    this.rollcall.push({name: value.name, groupKey: value.groupKey, attendance: [[value.studentId , value.present]] });
    this.router.navigate(['']);
  }

}
