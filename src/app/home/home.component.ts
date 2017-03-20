//Basic imports for use throughout the application
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Student } from './student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  model = new Student('', '', false, [])

  //List observables for both items and classes. Currently, both are being called within
  //the same component as I am working on sending classList IDs to students. This is but
  //a test and ClassList IDs will not actually be attached to students.
  items: FirebaseListObservable<any>;
  classes: FirebaseListObservable<any>;


  constructor(public af: AngularFire) {
    //Initially linking the database lists to the Firebase Observables for later use
    this.items = af.database.list('/Students');
    this.classes = af.database.list('/ClassLists');

    //Printing the Auth object for use through development. This helps with pointing out
    //data which may be used as unique IDs for users
    this.af.auth.subscribe(auth=>
    console.log(auth));
  }

    classtest = [];

  //Function to add item to the Firebase database. Adding Name, Email, and ClassID at the
  //moment. This will be changed once main development is completed.
   addItem(newName: string, newEmail: string, classId: number[]) {
    //All items for a single object get pushed in one push, not in one function.
     // Multiple Push creates many new objects
   this.items.push({name: newName, email: newEmail, archive: 0, classId: this.model.classId});
   }

   //Function to update items within the Firebase. Currently changes the user's name.
  //This will be updated at the project goes on as it could be used to update more fields
   updateItem(key: string, updateText: string) {
   this.items.update(key, {name: updateText});
   }

   //Function to delete items within the Firebase. Basic functionality as it removes
  //content from the Firebase.
   deleteItem(key: string) {
   this.items.remove(key);
   }

   //Function to archive items within the Firebase. Changes the value of the item's archive
  //key to 1, setting it to archived, making it not appear on the main screen.
   archiveItem(key: string) {
    this.items.update(key, {archive: 1});
   }

   //Function to delete all items within the Student table. Purly for development purposes.
   deleteEverything() {
   this.items.remove();
   }
}
