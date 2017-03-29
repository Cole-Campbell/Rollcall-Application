import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';

import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-rollcall',
  templateUrl: './rollcall.component.html',
  styles: [],
  providers: [GenerateArrayService]
})
export class RollcallComponent implements OnInit {

  //Variables declared for later use. GroupID holds the groupId pulled from the URL.
  groupId: any;

  //Declarations for the Firebase variables which will be used to hold the connections
  //to specific tables within firebase.
  groups: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;
  rollcall: FirebaseListObservable<any>;
  classLists: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService,
              public fb: FormBuilder) {

    //Declaring the specific table links for each variable.
    this.groups = af.database.list('/Groups');
    this.students = af.database.list('/Students');
    this.rollcall = af.database.list('/RollCalls');
    this.classLists = af.database.list('/ClassLists');

    //Declaring the form which will be used within the html. The form contains name, with
    //validator required, and present to require as well.
    this.form = fb.group({
      'name' : [null, Validators.compose([Validators.required])],
      'present' : [[], Validators.required]
    })
  }

  ngOnInit() {

    //Variable declared at the start of the component are given their values here.
    //GroupID is given the router URL which is split by / and is given the second value.
    this.groupId = this.router.url.split('/')[2];

  }

  //Submit Function which is passed the value of the form.
  submitRollcall(value: any) {

    //Student attendance variable is declared a variable. Timestamp is declared and is given
    //the date in string form.
    var studentAttendance = [];
    var timestamp = new Date().toString();

    //Loop which goes through the value form and is bound to each value that is not equal to
    //groupKey or name. Each other value is then pushed into the student attendance array
    for(var i in value){
      if(i != "groupKey" && i != "name"){
        studentAttendance.push([i, value[i]]);
      }
    }

    //Pushes values to the rollcall table using the values from the form.
    this.rollcall.push({name: value.name, groupKey: value.groupKey, present: studentAttendance, time : timestamp});
    this.router.navigate(['group', this.groupId]);
  }

}
