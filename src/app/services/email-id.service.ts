import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class EmailIdService {
  emailId: any;
  myNum = 0;
  constructor(public af:AngularFire) {
    af.auth.subscribe(response => {
      this.emailId = response.auth.email;
    });
  }

}
