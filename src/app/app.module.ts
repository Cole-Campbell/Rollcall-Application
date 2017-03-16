import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AF } from "./providers/af";
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent
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
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
