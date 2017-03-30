import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-class-list',
  templateUrl: './new-class-list.component.html',
  styles: []
})

export class NewClassListComponent {

  //Declaration fo Firebase Observable variable. This will be bound to the database list
  //in the constructor
  classLists: FirebaseListObservable<any>;

  //Declaring the form of type FormGroup. This is used later when declaring the
  //various form names later in the data driven form.
  form: FormGroup;

  constructor(public af: AngularFire, private router: Router, fb: FormBuilder) {

    //Binding Database list table route to observable variable.
    this.classLists = af.database.list('/ClassLists');

    //Declaring the names of fields within the form, defauly values and validators
    this.form = fb.group({
      'className' : [null, Validators.compose([Validators.required])],
      'programName' : ['CMM', Validators.required],
      'year' : ['1', Validators.required]
    })
  }

  //Function is run on form submittion. Content from the form is added into the function
  //and is pushed to the ClassList table. User is then navigated home.
  addClassList(value: any){
    this.classLists.push({name: value.className, program: value.programName, year: value.year});
    this.router.navigate(['']);
  }


}
