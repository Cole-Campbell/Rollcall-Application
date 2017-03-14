/**
 * Created by Colossus on 14/03/2017.
 */
import { Injectable } from "@angular/core";
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AF {

  constructor(public af: AngularFire) {}

  //Login
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  //Logout
  logout() {
    return this.af.auth.logout();
  }
}
