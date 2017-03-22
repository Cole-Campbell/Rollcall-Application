import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RoutingModule } from './routing/routing.module';
import { NewGroupComponent } from './new-group/new-group.component';
import { GroupComponent } from './group/group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAu2W5XpOR0Cka0CQo4fB7epIsfcNC2J2k",
  authDomain: "k00203819-assignment1.firebaseapp.com",
  databaseURL: "https://k00203819-assignment1.firebaseio.com",
  storageBucket: "k00203819-assignment1.appspot.com",
  messagingSenderId: "431278901181"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewGroupComponent,
    GroupComponent,
    EditGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
