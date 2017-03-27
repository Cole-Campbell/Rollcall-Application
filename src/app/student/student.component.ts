import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [``]
})
export class StudentComponent {

  classes: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af:AngularFire, private router: Router, fb: FormBuilder) {

    this.classes = af.database.list('/ClassLists');
    this.students = af.database.list('/Students');

    this.form = fb.group({
      'name' : [null, Validators.compose([Validators.required])],
      'email' : [null, Validators.email],
      'studentId' : [null, Validators.compose([Validators.required, Validators.maxLength(9), Validators.minLength(9)])],
      'classListId' : [[], Validators.required]
    })
  }
  addStudent(value: any){
    let myKey: any;
    myKey = value.studentId;
    this.students.push({name: value.name, email: '', studentId: value.studentId, classListId: []}).then((value) => { console.log(value.studentId)})
    this.router.navigate(['']);
  }

}
