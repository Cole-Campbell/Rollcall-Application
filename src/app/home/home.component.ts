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

   addItem(newName: string, newEmail: string) {
    //All items for a single object get pushed in one push, not in one function.
     // Multiple Push creates many new objects
   this.items.push({name: newName, email: newEmail, archive: 0});
   }

   updateItem(key: string, newText: string) {
   this.items.update(key, {name: newText});
   }

   deleteItem(key: string) {
   this.items.remove(key);
   }

   archiveItem(key: string) {
    this.items.update(key, {archive: 1});
   }

   deleteEverything() {
   this.items.remove();
   }
}
