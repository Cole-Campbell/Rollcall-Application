import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

//Form Builder
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { editGroup } from '../interfaces/editGroup';
import { GenerateArrayService } from '../services/generate-array.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css'],
  providers: [GenerateArrayService]
})
export class EditGroupComponent implements OnInit {

  form;

  groupId: String;

  groups: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;

  group = new editGroup('',false,[]);

  complexForm: FormGroup;

  constructor(public af: AngularFire,
              private router: Router,
              public gas: GenerateArrayService,
              private formBuilder: FormBuilder,
              fb: FormBuilder) {

    this.groups = af.database.list('/Groups');
    this.classes = af.database.list('/ClassLists');

    //Declaring default values
    this.complexForm = fb.group({
      'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'hiking' : false,
      'eating' : false,
      'swimming' : false
    })

  }

  ngOnInit() {
    this.groupId = this.router.url.split('/')[2];
    console.log(this.groupId);


    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ]))
    });

  }

  editGroup(group: any) { //, classId: group.classId
    this.groups.update(group.$key,{name: group.name});
    this.router.navigate(['']);
  }

  /*Submits content from form.
  submitForm(form: any): void{
    console.log('form data: ');
    this.groups.push(form);
    //console.log(form);
  }
  */

  submitForm(value: any):void{
    console.log('Reactive Form Data: ');
    console.log(value);
    this.groups.push(value);
  }

}
