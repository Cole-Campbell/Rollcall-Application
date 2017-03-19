import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {
    this.items = af.database.list('/Students');

    this.af.auth.subscribe(auth=>
    console.log(auth));
  }

   addItem(newName: string) {
   this.items.push({name: newName});
   }

   updateItem(key: string, newText: string) {
   this.items.update(key, {name: newText});
   }

   deleteItem(key: string) {
   this.items.remove(key);
   }

   deleteEverything() {
   this.items.remove();
   }
}
