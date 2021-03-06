import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

//Declaration of all components within the app. These have all been imported through the Angular CLI
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { NewGroupComponent } from './new-group/new-group.component';
import { GroupComponent } from './group/group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { StudentComponent } from './student/student.component';
import { NewClassListComponent } from './new-class-list/new-class-list.component';
import { RollcallComponent } from './rollcall/rollcall.component';

//Declaring the Firebase Configuration information for use in the AngularFire Module.
export const firebaseConfig = {
  apiKey: "AIzaSyAu2W5XpOR0Cka0CQo4fB7epIsfcNC2J2k",
  authDomain: "k00203819-assignment1.firebaseapp.com",
  databaseURL: "https://k00203819-assignment1.firebaseio.com",
  storageBucket: "k00203819-assignment1.appspot.com",
  messagingSenderId: "431278901181"
};

//Declaring Google as a Provider and the method as to how the login window is presented.
//Selected Popup method as his does not interfere with the deployed version's login sequence
const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewGroupComponent,
    GroupComponent,
    EditGroupComponent,
    StudentComponent,
    NewClassListComponent,
    RollcallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
