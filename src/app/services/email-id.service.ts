//This service is used to get the email from the user's auth object. The email is pulled
//from auth instead of the google object as it was found on initial login
//that the email is not set within the google object. Additionally, email is used
//as a uID is unique, but if authentication is revoked, the user would lose their
//content. Emails are unique, especially through using Google Login's, that no content
//could be mixed up.

import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class EmailIdService {
  emailId: any;
  constructor(public af:AngularFire) {
    af.auth.subscribe(response => {
      //Error is thrown on logout out the response cannot be filled. Check to see if
      //response is not null before proceeding to bind it to a variable for use.
      if(response != null) {
        this.emailId = response.auth.email;
      }
    });
  }

}
