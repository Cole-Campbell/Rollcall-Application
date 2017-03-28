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

  classLists: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af: AngularFire, private router: Router, fb: FormBuilder) {
    this.classLists = af.database.list('/ClassLists');

    this.form = fb.group({
      'className' : ['Classlist Name', Validators.compose([Validators.required])],
      'programName' : 'CMM',
      'year' : '1'
    })
  }

  addClassList(value: any){
    this.classLists.push({name: value.className, program: value.programName, year: value.year});
    this.router.navigate(['']);
  }


}
