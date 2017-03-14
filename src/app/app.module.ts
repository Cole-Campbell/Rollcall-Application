import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAu2W5XpOR0Cka0CQo4fB7epIsfcNC2J2k",
      authDomain: "k00203819-assignment1.firebaseapp.com",
      databaseURL: "https://k00203819-assignment1.firebaseio.com",
      storageBucket: "k00203819-assignment1.appspot.com",
      messagingSenderId: "431278901181"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
