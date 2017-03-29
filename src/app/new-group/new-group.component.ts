import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Calling upon the Email Service which gets the email from the Auth object.
import { EmailIdService } from '../services/email-id.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css'],
  providers: [EmailIdService]
})
export class NewGroupComponent {

  //Declaring the variables which will hold the Firebase list observables.
  classes: FirebaseListObservable<any>;
  groups: FirebaseListObservable<any>;

  //Declaring the form which will be used for the data driven form.
  form: FormGroup;

  constructor(public af:AngularFire, private router: Router, fb: FormBuilder, public eis: EmailIdService) {

    //Attaching Firebase routes to the observables for use throughout the HTML.
    this.classes = af.database.list('/ClassLists');
    this.groups = af.database.list('/Groups');

    //Creating the Data Form which will declare the default calues and validators for the
    //HTML form.
    this.form = fb.group({
      'name' : [null, Validators.compose([Validators.required])],
      'email' : eis.emailId,
      'archive' : false,
      'classId' : [[], Validators.required]
    })
  }
  //Add group function which takes the value from the form. Each value declared in the push is then
  //pushed up the the groups table within firebase. After, the user is navigated to home.
  addGroup(value: any){
    this.groups.push({name: value.name, email: value.email, archive: false, classId: value.classId});
    this.router.navigate(['']);
  }

}
