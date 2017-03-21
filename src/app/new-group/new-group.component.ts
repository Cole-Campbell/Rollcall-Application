import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { Group } from '../interfaces/group';


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {

  group = new Group('','',false,[]);

  classes: FirebaseListObservable<any>;
  newGroup: FirebaseListObservable<any>;

  constructor(public af:AngularFire, private router: Router) {
    this.classes = af.database.list('/ClassLists');
    this.newGroup = af.database.list('/Groups')
  }

  addGroup(newEmail: string){
    this.newGroup.push({name: this.group.name, email: newEmail, archive: false, classId: this.group.classId});
    this.router.navigate(['']);
  }

}
