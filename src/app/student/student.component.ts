import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
//Called Form Group and Form Builder as this from is data driven.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [``]
})

export class StudentComponent {

  //Declaring variabled to hold the Firebase List Observables. These will be called
  //Multiple times through this component as this is component is focused on
  //Adding students to Firebase and assigning them to a specific class.
  classes: FirebaseListObservable<any>;
  students: FirebaseListObservable<any>;

  //Declaring form as a new FormGroup. FormGroup is part of the datadriven form.
  //The formgroup helps with debulking the template by declaring the Validators back
  //here, as well as the initial value of the form.
  form: FormGroup;

  constructor(public af:AngularFire, private router: Router, fb: FormBuilder) {

    //Adding the Firebase List to each variable, for later use in the front end.
    this.classes = af.database.list('/ClassLists');
    this.students = af.database.list('/Students');

    //Declaring the form is a Form Builder Group. Within this form builder validators are declared
    //and form names are given. The form in the template will need to be strict to this data.
    //Pattern Validator has been added to using Regex to find a
    this.form = fb.group({
      'name' : ['', Validators.compose([Validators.required])],
      'email' : [null, Validators.email],
      'studentId' : ['', Validators.compose([Validators.required, Validators.maxLength(9), Validators.minLength(9), Validators.pattern(`^\K.*`)])],
      'classListId' : [null, Validators.required]
    })
  }

  //Function which takes all of the values from the front end form and pushes it to the respective firebase
  //table. Values are given by value.{{name}} as the front end content is gathered by the form in a value object
  //Once the values are pushed, the user is navigated to the home page.
  addStudent(value: any){
    this.students.push({name: value.name, email: value.email, studentId: value.studentId, classListId: value.classListId})
    this.router.navigate(['']);
  }

}
