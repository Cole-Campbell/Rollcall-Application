import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailIdService } from '../services/email-id.service';


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css'],
  providers: [EmailIdService]
})
export class NewGroupComponent {

  classes: FirebaseListObservable<any>;
  groups: FirebaseListObservable<any>;

  form: FormGroup;

  constructor(public af:AngularFire, private router: Router, fb: FormBuilder, public eis: EmailIdService) {

    this.classes = af.database.list('/ClassLists');
    this.groups = af.database.list('/Groups');

    this.form = fb.group({
      'name' : [null, Validators.compose([Validators.required])],
      'email' : eis.emailId,
      'archive' : false,
      'classId' : [[], Validators.required]
    })
  }
  addGroup(value: any){

    this.groups.push({name: value.name, email: value.email, archive: false, classId: value.classId});
    this.router.navigate(['']);
  }

}
